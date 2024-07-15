import heart_s from '@assets/icons/heart_s.svg';

import CardTitle from '../card-title/CardTitle';
import Image from '../image/Image';
import LocationTitle from '../location-title/LocationTitle';

import styles from './style.module.css';

type ListCardProps = {
  title: string;
  likeCount: number;
  price: number;
  location: string;
  src: string;
  alt?: string;
};

export default function ListCard(props: ListCardProps) {
  const { src, alt, title, likeCount, price, location } = props;

  return (
    <article className={styles['list-card']}>
      <div>
        <Image className={styles.card__image} src={src} alt={alt} />
      </div>

      <div className={styles.information}>
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
}
