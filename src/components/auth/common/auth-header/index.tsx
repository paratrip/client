import chevron_left from '@assets/icons/chevron_left.svg';

import { useNavigate } from 'react-router-dom';

import ActionButton from '@components/ui/action-button';

import style from './auth-header.module.css';

type AuthHeaderProps = {
  title?: string;
  type?: 'progress' | 'none';
  width?: number;
  customBack?: string;
};

export default function AuthHeader(props: AuthHeaderProps) {
  const { title, type = 'none', width, customBack } = props;

  const navigate = useNavigate();

  function backHandler() {
    if (customBack) {
      navigate(customBack);
    } else {
      navigate(-1);
    }
  }

  return (
    <header className={style.header}>
      <section className={style.header__container}>
        <ActionButton
          src={chevron_left}
          alt='뒤로가기'
          onClick={backHandler}
        ></ActionButton>

        <h1>{title}</h1>

        <div className={style.null} />
      </section>
      {type === 'progress' && (
        <div className={style.progress}>
          <div className={style.bar} style={{ width: `${width}%` }} />
        </div>
      )}
    </header>
  );
}
