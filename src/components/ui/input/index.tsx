import { InputHTMLAttributes, memo } from 'react';

import style from './style.module.css';

type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = memo(function Input(props: InputProps) {
  const { className = '' } = props;

  return <input className={`${className} ${style.input}`} {...props}></input>;
});

export default Input;
