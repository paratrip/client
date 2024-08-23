import chevron_down from '@assets/icons/chevron_down.svg';

import styles from './detail-content.module.css';

export default function DetailContent() {
  return (
    <main className={styles.main}>
      <header className={styles.main__header}>
        <h3>상품상세</h3>
      </header>

      <section>
        <img
          src='https://images.unsplash.com/photo-1723920785346-d29bed210134?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </section>

      <button className={styles.main__button}>
        자세한 상품정보 보기 <img src={chevron_down} alt='더 보기' />
      </button>
    </main>
  );
}
