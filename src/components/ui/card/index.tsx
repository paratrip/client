import heart_s from '@assets/icons/heart_s.svg';

import CardTitle from '../card-title';
import LocationTitle from '../location-title';

import style from './style.module.css';

type CardProps = {
  postImg: string;
  postTitle: string;
  location: string;
  likeCount: number;
  price: number;
};

export default function Card(props: CardProps) {
  const { postImg, postTitle, likeCount, price, location } = props;

  return (
    <li className={style.card}>
      <header className={style.card__header}>
        <img src={postImg} alt={postTitle} />
      </header>

      <section className={style.card__information}>
        <CardTitle title={postTitle} />

        <div className={style.information__actions}>
          <img src={heart_s} alt='좋아요' />
          <span>{likeCount}</span>
        </div>
      </section>

      <footer className={style.card__footer}>
        <LocationTitle title={location} />
        <span className={style.footer__price}>
          <strong>{price}</strong>
          <p>원</p>
        </span>
      </footer>
    </li>
  );
}
