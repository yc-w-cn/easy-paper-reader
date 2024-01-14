export const c = (...values: string[]) => {
  // 字符串替换：替换空格为下划线
  return values.map((item) => item.replace(/\s/g, "_")).join("-") || "";
};
