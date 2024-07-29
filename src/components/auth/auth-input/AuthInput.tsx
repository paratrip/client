import style from './AuthInput.module.css';

type AuthInputProps = {
  className?: string;
  onClick?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput(props: AuthInputProps) {
  const { className, onBlur } = props;

  return <input {...props} className={`${className} ${style.input}`} />;
}
