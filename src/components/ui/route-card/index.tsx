import { memo } from 'react';

import Image from '../image';
import LocationTitle from '../location-title';
import CardTitle from '../card-title';

import style from './style.module.css';

type RouteCardProps = {
  src: string;
  alt?: string;
  title: string;
  location: string;
  distance: number;
};

const RouteCard = memo(function RouteCard(props: RouteCardProps) {
  const { src, alt = '', title, location, distance } = props;

  return (
    <article className={style['route-card']}>
      <div>
        <Image className={style.card__image} src={src} alt={alt} />
      </div>

      <div className={style.card__information}>
        <CardTitle title={title} />
        <p>
          <LocationTitle title={location} />
          <span>﹒ 내 위치에서 {distance}km</span>
        </p>
      </div>
    </article>
  );
});

export default RouteCard;
