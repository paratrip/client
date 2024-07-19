import heart_s from '@assets/icons/heart_s.svg';

import CardTitle from '../card-title';
import LocationTitle from '../location-title';

import style from './style.module.css';

type CardProps = {
  src: string;
  title: string;
  like_count: number;
  price: number;
};

export default function Card(props: CardProps) {
  const { src, title, like_count, price } = props;

  return (
    <li className={style.card}>
      <header className={style.card__header}>
        <img src={src} alt={title} />
      </header>

      <section className={style.card__information}>
        <CardTitle title={title} />

        <div className={style.information__actions}>
          <img src={heart_s} alt='좋아요' />
          <span>{like_count}</span>
        </div>
      </section>

      <footer className={style.card__footer}>
        <LocationTitle title='제주' />
        <span className={style.footer__price}>
          <strong>{price}</strong>
          <p>원</p>
        </span>
      </footer>
    </li>
  );
}
