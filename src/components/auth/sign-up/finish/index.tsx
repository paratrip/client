import AuthContainer from '@components/auth/common/auth-container';
import FunnelHeader from '@components/auth/common/funnel-header';
import { Link } from 'react-router-dom';

import information from '@assets/icons/information.svg';
import course from '@assets/icons/course.svg';
import community from '@assets/icons/community.svg';

import styles from './finish.module.css';

const INFORMATION = [
  {
    id: '_1',
    heading: '패글 정보',
    icon: information,
  },
  {
    id: '_2',
    heading: '관광코스',
    icon: course,
  },
  {
    id: '_3',
    heading: '커뮤니티',
    icon: community,
  },
];

export default function Finish() {
  return (
    <AuthContainer type='funnel'>
      <FunnelHeader heading='회원가입이 완료되었습니다!' />

      <section className={styles.funnel__section}>
        <h2 className={styles.section__header}>
          환영합니다 👋 <br />
          [USER EMAIL] 님!
        </h2>

        <article className={styles.section__article}>
          <header className={styles.article__header}>
            <p>
              <strong>Paratrip</strong>과 함께 <br />더 많은 정보, 더 많은
              소식을 접해보세요.
            </p>
          </header>

          <ul className={styles.article__ul}>
            {INFORMATION.map(item => (
              <li key={item.id} className={styles.ul__li}>
                <div className={styles.li__image}>
                  <img src={item.icon} alt={item.heading} />
                </div>
                <strong>{item.heading}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <Link className={styles.button} to='/login'>
        로그인하러 가기
      </Link>
    </AuthContainer>
  );
}
