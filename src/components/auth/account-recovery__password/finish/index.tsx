import LinkButton from '@components/ui/link-button';

import styles from '../../account-recovery__email/finish/finish.module.css';

export default function Finish() {
  return (
    <section className={styles.section}>
      <h2>회원님의 비밀번호 재설정이 완료되었습니다.</h2>
      <p>초기화면으로 돌아가 로그인해 주세요.</p>

      <LinkButton buttonStyle='fill' to='/email'>
        로그인하러가기
      </LinkButton>
    </section>
  );
}
