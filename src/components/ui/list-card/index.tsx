import { memo } from 'react';
import heart_s from '@assets/icons/heart_s.svg';

import CardTitle from '../card-title';
import Image from '../image';
import LocationTitle from '../location-title';

import style from './style.module.css';

type ListCardProps = {
  title: string;
  likeCount: number;
  price: number;
  location: string;
  src: string;
  alt?: string;
};

const ListCard = memo(function ListCard(props: ListCardProps) {
  const { src, alt, title, likeCount, price, location } = props;

  return (
    <article className={style['list-card']}>
      <div>
        <Image className={style.card__image} src={src} alt={alt} />
      </div>

      <div className={style.information}>
        <CardTitle title={title} />

        <p>
          <img src={heart_s} alt={`좋아요 ${likeCount}개`} /> {likeCount}
        </p>

        <strong>
          {price} <span>원</span>
        </strong>

        <LocationTitle title={location} />
      </div>
    </article>
  );
});

export default ListCard;
