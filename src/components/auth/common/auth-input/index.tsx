import style from './auth-input.module.css';

type AuthInputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput(props: AuthInputProps) {
  const { className } = props;

  return <input {...props} className={`${className} ${style.input}`} />;
}
