import { getLogger } from "@/utils/logger"
import { App, Button, Upload, UploadFile } from "antd"
import { RcFile } from "antd/es/upload"
import localforage from "localforage"
import { clone } from "lodash"

export function ImportDataButton() {
  const logger = getLogger(ImportDataButton)
  const { message } = App.useApp()

  const beforeUpload = (file: UploadFile) => {
    const isJSON = file.type === "application/json"
    if (!isJSON) {
      message.error("只能导入JSON文件")
    }
    return isJSON
  }

  const handleReadFile = async (file: string | RcFile | Blob) => {
    try {
      const jsonData = await readFileAsync(file)
      logger.debug("JSON 数据:", jsonData)
    } catch (error) {
      logger.error("读取文件出错:", error)
    }
  }

  const readFileAsync = (file: string | RcFile | Blob) => {
    return new Promise((resolve, reject) => {
      if (typeof file === "string") {
        resolve(JSON.parse(file))
      } else {
        const reader = new FileReader()
        reader.onload = (event) => {
          try {
            if (typeof event.target?.result === "string") {
              const jsonData = JSON.parse(event.target.result)
              if (Array.isArray(jsonData)) {
                for (const exportPaper of jsonData) {
                  const exportBlocks = clone(exportPaper.blocks)
                  localforage.getItem(exportPaper.key).then((res) => {
                    if (!res) {
                      delete exportPaper.blocks
                      localforage.setItem(exportPaper.key, exportPaper)
                    }
                  })
                  if (Array.isArray(exportBlocks)) {
                    for (const exportBlock of exportBlocks) {
                      localforage.getItem(exportBlock.key).then((res) => {
                        if (!res) {
                          localforage.setItem(exportBlock.key, exportBlock)
                        }
                      })
                    }
                  }
                }
              }
              message.success('操作成功')
              resolve(jsonData)
            }
          } catch (error) {
            reject(error)
          }
        }
        reader.readAsText(file)
      }
    })
  }

  const handleImport = async () => {}
  return (
    <Upload
      beforeUpload={beforeUpload}
      maxCount={1}
      customRequest={async ({ file, onError }) => {
        handleReadFile(file).catch(onError)
      }}
      showUploadList={false}
    >
      <Button type="default" onClick={handleImport}>
        恢复数据
      </Button>
    </Upload>
  )
}
