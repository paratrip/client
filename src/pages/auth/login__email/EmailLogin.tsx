import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { AxiosError, isAxiosError } from 'axios';

import { useFetch } from '@hooks/useFetch';

import line from '@assets/icons/line.svg';
import AuthContainer from '@components/auth/common/auth-container';
import AuthInput from '@components/auth/common/auth-input';
import AuthHeader from '@components/auth/common/auth-header';
import AuthButton from '@components/auth/common/auth-button';

import { END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import { useRecoilState } from 'recoil';
import {
  loginAccessToken,
  loginMemberSeq,
  loginRefreshToken,
} from '@store/login-token';

import styles from './EmailLogin.module.css';

export default function EmailLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const fetchHandler = useFetch<
    { email: string; password: string },
    {
      accessToken: string;
      memberSeq: number;
      refreshToken: string;
    }
  >();

  const [_accessToken, setAccessToken] = useRecoilState(loginAccessToken);
  const [_refreshToken, setRefreshToken] = useRecoilState(loginRefreshToken);
  const [_memberSeq, setMemberSeq] = useRecoilState(loginMemberSeq);

  const [isValid, setIsValid] = useState<boolean>(false);

  const navigate = useNavigate();

  function getValueHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      return;
    }

    setPassword(e.target.value);
  }

  async function submitHandler(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    try {
      const response = await fetchHandler({
        url: END_POINT_MEMBER + '/login',
        method: 'post',
        data: { email, password },
      });

      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setMemberSeq(response.data.memberSeq);

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('memberSeq', String(response.data.memberSeq));

        navigate('/home');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ status: string }>;
        if (axiosError.response) {
          setIsValid(true);
        } else {
          console.log('No response received:', axiosError.message);
        }
      } else {
        console.log('Unexpected error:', error);
      }
    }
  }

  const conditional = email.length === 0 && password.length === 0;

  return (
    <AuthContainer type='default'>
      <AuthHeader title='로그인' />

      <form onSubmit={submitHandler}>
        <AuthInput
          placeholder='이메일 주소'
          type='email'
          name='email'
          onChange={getValueHandler}
        />
        <AuthInput
          placeholder='비밀번호'
          type='password'
          name='password'
          onChange={getValueHandler}
        />

        {isValid && (
          <section>
            <p className={styles.error}>
              입력한 회원정보를 다시 한 번 확인해 주세요.
            </p>
          </section>
        )}

        <div className={styles.form__checkbox}>
          <input type='checkbox' name='' id='' />
          <label htmlFor=''>로그인 상태 유지</label>
        </div>

        <AuthButton type='submit' disabled={conditional}>
          로그인
        </AuthButton>
      </form>

      <nav className={styles.container__nav}>
        <Link to='/sign-up'>회원가입</Link>
        <span>
          <img src={line} alt='line' />
        </span>
        <Link to='/account-recovery'>계정찾기</Link>
      </nav>
    </AuthContainer>
  );
}
