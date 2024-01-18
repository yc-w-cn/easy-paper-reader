import { ProFormRadio } from "@ant-design/pro-components";

export function TabDictionary() {
  return (
    <div className="my-4">
      <ProFormRadio.Group
        label="词典"
        fieldProps={{
          defaultValue: "iciba",
        }}
        options={[
          {
            label: "金山词霸",
            value: "iciba",
          },
        ]}
      />
    </div>
  );
}
