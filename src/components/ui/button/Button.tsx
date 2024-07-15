import { ButtonHTMLAttributes } from 'react';

import styles from './style.module.css';

type ButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { className = '', children } = props;

  return (
    <button className={`${className} ${styles.button}`} {...props}>
      {children}
    </button>
  );
}
