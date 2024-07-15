import { ReactNode } from 'react';

import styles from './style.module.css';

type GrayContainerProps = { children: ReactNode; className?: string };

export default function GrayContainer(props: GrayContainerProps) {
  const { className, children } = props;

  return (
    <section className={`${className} ${styles['gray-container']}`}>
      {children}
    </section>
  );
}
