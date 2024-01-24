export const isURL = (str: string): boolean => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(str);
}
