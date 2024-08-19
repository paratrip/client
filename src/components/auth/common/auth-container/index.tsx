import style from './auth-container.module.css';

type AuthContainerProps = {
  children: React.ReactNode | React.ReactElement[];
  type: 'default' | 'funnel';
};

export default function AuthContainer(props: AuthContainerProps) {
  const { children, type = 'default' } = props;
  return (
    <main className={style['auth-container']}>
      {type === 'default' ? (
        <div className={style.container__content}>{children}</div>
      ) : (
        <div className={style.container__funnel}>{children}</div>
      )}
    </main>
  );
}
