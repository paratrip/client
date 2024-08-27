export const isValidStringLength = (
  str: string,
  minLength: number,
  maxLength: number
) => {
  return str.length >= minLength && str.length <= maxLength;
};

export const isValidId = (id: string) => {
  const idRegex = /^[a-z0-9]{1,30}$/;
  return idRegex.test(id);
};

export const isValidBirth = (birth: string) => {
  const birthRegex = /^[0-9]{8}$/;
  return birthRegex.test(birth);
};
