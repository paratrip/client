import { Link } from 'react-router-dom';

import share from '@assets/icons/share.svg';
import heart from '@assets/icons/heart.svg';

import ActionButton from '@components/ui/action-button';

import styles from './detail-header.module.css';

type DetailHeaderProps = {
  to: string;
};

export default function DetailHeader(props: DetailHeaderProps) {
  const { to } = props;

  return (
    <header className={styles['detail-header']}>
      <section className={styles.header__section}>
        <Link to={to}>제주</Link>

        <h2>
          플라이 포커스 패러글라이딩 스쿨 업체명 더 길어지면 두줄로 오게됩니다.
          최대 길이는 이정도로 설정 할거 같습니다
        </h2>

        <strong>
          77,000<span>원</span>
        </strong>
      </section>

      <nav className={styles.header__nav}>
        <ActionButton src={share} />
        <ActionButton src={heart} />
      </nav>
    </header>
  );
}
