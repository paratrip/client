import { createPortal } from 'react-dom';

import Hashtag from '@components/ui/hashtag';

import styles from './filter-modal.module.css';

type FilterModalProps = {
  closeHandler: () => void;
};

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler } = props;

  return createPortal(
    <>
      <div className={styles.overlay} onClick={closeHandler} />
      <main className={styles.modal}>
        <br />
      </main>
    </>,
    document.getElementById('modal')!
  );
}
