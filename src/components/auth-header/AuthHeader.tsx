import chevron_left from '@assets/icons/chevron_left.svg';

import { useNavigate } from 'react-router-dom';

import ActionButton from '@components/ui/action-button';

import style from './AuthHeader.module.css';

type AuthHeaderProps = {
  title: string;
  type?: 'progress' | 'none';
};

export default function AuthHeader(props: AuthHeaderProps) {
  const { title, type = 'none' } = props;

  const navigate = useNavigate();

  function backHandler() {
    navigate(-1);
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

        <div />
      </section>
    </header>
  );
}
