import chalk from "chalk"
import { isProduction } from "./environment"

export const getLogger = (item: any, show: boolean = true) => {
  if (typeof item === "string") {
    return new Logger(item, show)
  }
  if (typeof item === "function") {
    return new Logger(item.name, show)
  }
  return new Logger(JSON.stringify(item), show)
}

export default class Logger {
  constructor(
    public logId: string,
    public show = true,
  ) {}
  public trace(key: string, ...params: any[]) {
    if (!isProduction && this.show) {
      const formatKey = chalk.bgBlue.whiteBright(this.formatKey(key))
      console.trace(`${this.formatLogId()}${formatKey}`, ...params)
    }
  }
  public debug(key: string, ...params: any[]) {
    if (!isProduction && this.show) {
      const formatKey = chalk.bgMagenta.whiteBright(this.formatKey(key))
      console.debug(`${this.formatLogId()}${formatKey}`, ...params)
    }
  }
  public info(key: string, ...params: any[]) {
    if (!isProduction && this.show) {
      const formatKey = chalk.bgCyan.whiteBright(this.formatKey(key))
      console.info(`${this.formatLogId()}${formatKey}`, ...params)
    }
  }
  public warn(key: string, ...params: any[]) {
    if (!isProduction && this.show) {
      const formatKey = chalk.red.bgYellowBright(this.formatKey(key))
      console.warn(`${this.formatLogId()}${formatKey}`, ...params)
    }
  }
  public error(key: string, ...params: any[]) {
    if (!isProduction && this.show) {
      const formatKey = chalk.whiteBright.bgRedBright(this.formatKey(key))
      console.error(`${this.formatLogId()}${formatKey}`, ...params)
    }
  }
  public computeExtra(options: any[]) {
    if (!isProduction && this.show) {
      // In the testing environment, execute additional operations
      console.log(chalk.cyan("Computing extra for options:"), options)
    }
  }
  private formatKey(key: string) {
    return ` ${key} `
  }
  private formatLogId() {
    const primaryColor = "#EE9E00"
    const darkColor = "#021524"
    return chalk.hex(darkColor).bgHex(primaryColor).bold(` ${this.logId} `)
  }
}
