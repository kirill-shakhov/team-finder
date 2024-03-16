export function isNumericString(str: string): boolean {
  return /^(\d+(,\d+)*)?$/.test(str);
}

export function isAlphabeticString(str: string): boolean {
  return /^[A-Za-z,]*$/.test(str);
}

