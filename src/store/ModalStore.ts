// modalAtom.ts
import { atom } from 'recoil';

interface ModalState {
  isOpen: boolean;
  type: string | null;
  props: any;
}

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    isOpen: false,
    type: null,
    props: {},
  },
});
