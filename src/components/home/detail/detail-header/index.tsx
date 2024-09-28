import { Link } from 'react-router-dom';

import { transformPrice } from '@utils/helpers/transfrom-price';

import share from '@assets/icons/share.svg';
import heart from '@assets/icons/heart.svg';

import ActionButton from '@components/ui/action-button';

import styles from './detail-header.module.css';

type DetailHeaderProps = {
  to: string;
  name: string;
  cost: string;
};

export default function DetailHeader(props: DetailHeaderProps) {
  const { to, name, cost } = props;

  return (
    <header className={styles['detail-header']}>
      <section className={styles.header__section}>
        <Link to={to}>제주</Link>

        <h2>{name}</h2>

        <strong>
          {transformPrice(cost)}
          <span>원</span>
        </strong>
      </section>

      <nav className={styles.header__nav}>
        <ActionButton src={share} />
        <ActionButton src={heart} />
      </nav>
    </header>
  );
}
