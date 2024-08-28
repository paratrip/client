import { atom } from 'recoil';

export const signUpEmailState = atom<string>({
  key: 'signUpEmailState',
  default: '',
});

export const signUpPasswordState = atom<string>({
  key: 'signUpPasswordState',
  default: '',
});

export const signUpPhonNumberState = atom<string>({
  key: 'signUpPhonNumberState',
  default: '',
});

export const signUpNicknameState = atom<string>({
  key: 'signUpNicknameState',
  default: '',
});

export const signUpBornState = atom<string>({
  key: 'signUpBornState',
  default: '',
});

export const signUpGenderState = atom<string>({
  key: 'signUpGenderState',
  default: '',
});
