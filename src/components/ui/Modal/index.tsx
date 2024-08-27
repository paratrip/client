// Modal.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@store/ModalStore';
import style from './Modal.module.css';

const Modal: React.FC = () => {
  const [modal, setModal] = useRecoilState(modalState);

  if (!modal.isOpen) return null;

  const closeModal = () => {
    setModal({ isOpen: false, type: null, props: {} });
  };

  return (
    <div className={style.modalOverlay}>
      {modal?.type === 'active' && (
        <div className={style.modalContent}>
          <div className={style.modalTitle}>
            <p>{modal.props.title}</p>
          </div>

          <div className={style.modalBtnBox}>
            <button onClick={closeModal}>취소</button>
            <button onClick={modal.props.onConfirm}>확인</button>
          </div>
        </div>
      )}

      {modal?.type === 'map' && <div>맵 모달</div>}
    </div>
  );
};

export default Modal;
