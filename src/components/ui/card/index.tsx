import { transformPrice } from '@utils/helpers/transfrom-price';
import heart_s from '@assets/icons/heart_s.svg';

import CardTitle from '../card-title';
import LocationTitle from '../location-title';

import style from './style.module.css';

type CardProps = {
  id: 0;
  name: 'string';
  heart: 0;
  region: 'string';
  cost: 0;
  imageUrl: 'string';
};

export default function Card(props: CardProps) {
  const { imageUrl, name, heart, cost, region } = props;

  return (
    <li className={style.card}>
      <header className={style.card__header}>
        <img src={imageUrl} alt={name} />
      </header>

      <section className={style.card__information}>
        <CardTitle title={name} />

        <div className={style.information__actions}>
          <img src={heart_s} alt='좋아요' />
          <span>{heart}</span>
        </div>
      </section>

      <footer className={style.card__footer}>
        <LocationTitle title={region} />
        <span className={style.footer__price}>
          <strong>{transformPrice(cost)}</strong>
          <p>원</p>
        </span>
      </footer>
    </li>
  );
}
