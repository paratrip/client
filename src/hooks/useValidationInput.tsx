import { useState } from 'react';

export function useValidationInput(
  regex: RegExp,
  checkDuplicate: (value: string) => Promise<boolean>
) {
  const [value, setValue] = useState<string>('');
  const [isValidation, setIsValidation] = useState<boolean>(true);
  const [isDuplication, setIsDuplication] = useState<boolean>(false);

  function checkValidation(newValue: string): void {
    const isValid = regex.test(newValue);
    setIsValidation(isValid);
  }

  async function checkDuplication(newValue: string) {
    if (newValue) {
      const duplicate = await checkDuplicate(newValue);
      setIsDuplication(duplicate);
    } else {
      setIsDuplication(false);
    }
  }

  function getValueHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value;

    setValue(newValue);
    checkValidation(newValue);
    checkDuplication(newValue);
  }

  return { value, isValidation, isDuplication, getValueHandler };
}
