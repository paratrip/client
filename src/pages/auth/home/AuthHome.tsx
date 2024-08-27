import { Link } from 'react-router-dom';

import logo from '@assets/logo.svg';
import kakao from '@assets/icons/kakao.svg';

import AuthContainer from '@components/auth/common/auth-container';
import Button from '@components/ui/button';

import style from './AuthHome.module.css';

export default function AuthHome() {
  return (
    <AuthContainer type='default'>
      <header className={style.container__header}>
        <img src={logo} alt='패러트립 로고' />

        <h1>로그인하고 더 많은 소식을 만나보세요!</h1>
      </header>

      <Button className={style.container__kakao}>
        <img src={kakao} alt='카카오 로그인' />
        <span>카카오 로그인</span>
      </Button>

      <Link className={style.container__email} to={'email'}>
        <span>이메일 로그인</span>
      </Link>

      <section className={style.container__section}>
        <header className={style.section__header}>
          <hr />
          <span>또는</span>
          <hr />
        </header>

        <nav className={style.section__nav}>
          <Link to='/sign-up'>회원가입</Link>
          <Link to='/account-recovery'>계정 찾기</Link>
        </nav>
      </section>
    </AuthContainer>
  );
}
