import LinkButton from '@components/ui/link-button';

import styles from './finish.module.css';
import { useRecoilValue } from 'recoil';
import { getFindEmailState } from '@store/find';

export default function Finish() {
  const email = useRecoilValue<string>(getFindEmailState);

  return (
    <section className={styles.section}>
      <h2>가입된 이메일 주소를 확인해 주세요.</h2>
      <p>
        회원님의 에미일 주소는 <strong>{email}</strong>입니다.
      </p>

      <LinkButton to='/auth/email' buttonStyle='fill'>
        로그인하러 가기
      </LinkButton>
      <LinkButton to='/account-recovery/password' buttonStyle='border'>
        비밀번호 재설정하러 가기
      </LinkButton>
    </section>
  );
}
