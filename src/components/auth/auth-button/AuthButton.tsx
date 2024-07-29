import style from './AuthButton.module.css';

type AuthButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AuthButton(props: AuthButtonProps) {
  const { disabled = true, children } = props;

  return (
    <button
      className={
        disabled
          ? `${style.button} ${style.disabled}`
          : `${style.button} ${style['not-disabled']}`
      }
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
