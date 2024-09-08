import { atom } from 'recoil';

export const findEmailPhonNumberState = atom<string>({
  key: 'findEmailPhonNumberState',
  default: '',
});

export const getFindEmailState = atom<string>({
  key: 'findEmailState',
  default: '',
});

export const findPasswordPhonNumberState = atom<string>({
  key: 'findPasswordPhonNumberState',
  default: '',
});
