import { memo } from 'react';
import heart_s from '@assets/icons/heart_s.svg';

import CardTitle from '../card-title';
import Image from '../image';
import LocationTitle from '../location-title';

import style from './style.module.css';
import { Link } from 'react-router-dom';

type ListCardProps = {
  id: number;
  title: string;
  likeCount: number;
  price: number;
  location: string;
  src: string;
  alt?: string;
};

const ListCard = memo(function ListCard(props: ListCardProps) {
  const { src, alt, id, title, likeCount, price, location } = props;

  return (
    <Link to={`/home/${id}`}>
      <article className={style['list-card']}>
        <section className={style.card__content}>
          <div>
            <Image className={style.card__image} src={src} alt={alt} />
          </div>

          <div className={style.information}>
            <CardTitle title={title} />

            <p>
              <img src={heart_s} alt={`좋아요 ${likeCount}개`} /> {likeCount}
            </p>

            <strong className={style.information__price}>
              {price} <span>원</span>
            </strong>

            <LocationTitle title={location} />
          </div>
        </section>

        <footer className={style.footer}>
          <hr />
        </footer>
      </article>
    </Link>
  );
});

export default ListCard;
