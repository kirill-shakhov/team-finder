export function isAlphabeticString(str: string): boolean {
  return /^[A-Za-z,]*$/.test(str);
}
