import { atom } from 'recoil';

export const loginAccessToken = atom<string>({
  key: 'loginAccessToken',
  default: '',
});

export const loginRefreshToken = atom<string>({
  key: 'loginRefreshToken',
  default: '',
});

export const loginMemberSeq = atom<number>({
  key: 'memberSeq',
  default: -1,
});
