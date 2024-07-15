import { memo } from 'react';

import { ButtonHTMLAttributes } from 'react';

import style from './style.module.css';

type ActionButtonProps = {
  className?: string;
  src: string;
  alt?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = memo(function ActionButton(props: ActionButtonProps) {
  const { className = '', src, alt } = props;

  return (
    <button className={`${className} ${style['action-button']}`} {...props}>
      <img src={src} alt={alt} />
    </button>
  );
});

export default ActionButton;
