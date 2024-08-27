import AuthInput from '@components/auth/common/auth-input';
import Button from '@components/ui/button';
import { Link } from 'react-router-dom';

import line from '@assets/icons/line.svg';
import AuthContainer from '@components/auth/common/auth-container';
import AuthHeader from '@components/auth/common/auth-header';
import AuthButton from '@components/auth/common/auth-button';

import style from './EmailLogin.module.css';

export default function EmailLogin() {
  return (
    <AuthContainer type='default'>
      <AuthHeader title='로그인' />

      <form>
        <AuthInput placeholder='이메일 주소' type='email' />
        <AuthInput placeholder='비밀번호' type='password' />

        <div className={style.form__checkbox}>
          <input type='checkbox' name='' id='' />
          <label htmlFor=''>로그인 상태 유지</label>
        </div>

        <AuthButton>로그인</AuthButton>
      </form>

      <nav className={style.container__nav}>
        <Link to='/sign-up'>회원가입</Link>
        <span>
          <img src={line} alt='line' />
        </span>
        <Link to='/account-recovery'>계정찾기</Link>
      </nav>
    </AuthContainer>
  );
}
