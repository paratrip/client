import { Link } from 'react-router-dom';

import AuthContainer from '@components/auth/common/auth-container';
import AuthHeader from '@components/auth/common/auth-header';
import ActionButton from '@components/ui/action-button';

import chevron_right from '@assets/icons/chevron_right.svg';

import styles from './AccountRecovery.module.css';

export default function AccountRecovery() {
  return (
    <AuthContainer type='funnel'>
      <AuthHeader title='계정찾기' />

      <Link to={'email'} className={styles['link-container']}>
        <section>
          <strong>이메일 주소 찾기</strong>
          <p>
            Paratrip 가입 시 기입한 전화번호로 인증을 통해 이메일 주소를 찾을 수
            있어요.
          </p>
        </section>

        <ActionButton src={chevron_right} />
      </Link>
      <Link to={'password'} className={styles['link-container']}>
        <section>
          <strong>비밀번호 재설정</strong>
          <p>Paratrip 가입 시 기입한 전화번호로 인증을 통해 재설정 합니다.</p>
        </section>

        <ActionButton src={chevron_right} />
      </Link>
    </AuthContainer>
  );
}
