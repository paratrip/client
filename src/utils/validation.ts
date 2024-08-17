export const isValidStringLength = (
  str: string,
  minLength: number,
  maxLength: number
) => {
  return str.length >= minLength && str.length <= maxLength;
};
