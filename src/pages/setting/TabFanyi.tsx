import { ProFormRadio } from "@ant-design/pro-components";

export function TabFanyi() {
  return (
    <div className="my-4">
      <ProFormRadio.Group
        label="翻译"
        fieldProps={{
          defaultValue: "alapi",
        }}
        options={[
          {
            label: "APNIC",
            value: "alapi",
          },
        ]}
      />
    </div>
  );
}
