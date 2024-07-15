import { ButtonHTMLAttributes, memo } from 'react';

import style from './style.module.css';

type ButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo(function Button(props: ButtonProps) {
  const { className = '', children } = props;

  return (
    <button className={`${className} ${style.button}`} {...props}>
      {children}
    </button>
  );
});

export default Button;
