// useModal.ts
import { useSetRecoilState } from 'recoil';
import { modalState } from '@store/ModalStore';

export const useModal = () => {
  const setModal = useSetRecoilState(modalState);

  const openModal = (type: string, props: any = {}) => {
    setModal({ isOpen: true, type, props });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null, props: {} });
  };

  return { openModal, closeModal };
};
