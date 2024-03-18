export function isNumericString(str: string): boolean {
  return /^(\d+(,\d+)*)?$/.test(str);
}