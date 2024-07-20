import { InputHTMLAttributes, memo } from 'react';
import style from './style.module.css';
import { INPUT } from '@constants/texts';
import Icon from '../Icon';

type InputProps = {
  className?: string;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = memo(function Input(props: InputProps) {
  const { className = '', ...rest } = props;

  return (
    <div className={`${style.inputContainer} ${className}`}>
      <Icon iconType='search' />
      <input
        className={style.input}
        {...rest}
        placeholder={INPUT.COMMUNITY.PLACEHOLDER}
      />
    </div>
  );
});

export default Input;
