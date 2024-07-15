import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './style.module.css';

type ActionButtonProps = {
  className?: string;
  src: string;
  alt?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ActionButton(props: ActionButtonProps) {
  const { className = '', src, alt } = props;

  return (
    <button className={`${className} ${styles['action-button']}`} {...props}>
      <img src={src} alt={alt} />
    </button>
  );
}
