import Hashtag from '@components/ui/hashtag';

import styles from './course-card.module.css';
import { Link } from 'react-router-dom';

type Tag = {
  tag: string;
  href: string;
};

type CourseCardProps = {
  href: string;
  image: string;
  title: string;
  location: string;
  hashtags: Tag[];
  locations: Tag[];
};

export default function CourseCard(props: CourseCardProps) {
  const { href, image, title, location, hashtags, locations } = props;

  return (
    <article className={styles.card}>
      <Link to={href}>
        <div className={styles.card__content}>
          <section className={styles['content__image-container']}>
            <img src={image} alt={`${title} 이미지`} />
          </section>

          <section className={styles.content__body}>
            <div className={styles.body__text}>
              <h3>{title}</h3>
              <span>{location}</span>
            </div>

            <div className={styles.body__hashtag}>
              {hashtags?.map(item => (
                <Hashtag tag={item.tag} href={item.href} />
              ))}
            </div>
          </section>
        </div>
      </Link>

      <div className={styles.locations}>
        {locations?.map(location => (
          <Link to={location.href}>
            <div className={styles.location}>{location.tag}</div>
          </Link>
        ))}
      </div>

      <hr className={styles.line} />
    </article>
  );
}
