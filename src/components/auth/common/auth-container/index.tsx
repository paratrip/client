import style from './auth-container.module.css';

type AuthContainerProps = {
  children: React.ReactNode;
};

export default function AuthContainer(props: AuthContainerProps) {
  const { children } = props;
  return (
    <main className={style['auth-container']}>
      <div className={style.container__box}>{children}</div>
    </main>
  );
}
