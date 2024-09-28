import { Link } from 'react-router-dom';

import type { ResponseTourCourse } from '@pages/tour-course/home/TourCourseHome';

import styles from './tour-course-list.module.css';
import Hashtag from '@components/ui/hashtag';
// import Hashtag from '@components/ui/hashtag';

type TourCourseListProps = {
  data: ResponseTourCourse[];
};

export default function TourCourseList(props: TourCourseListProps) {
  const { data } = props;

  return (
    <ul>
      {data.map((item, index) => (
        <li className={styles.card} key={'t' + index}>
          <Link to={`/course/${item.courseId}`}>
            <div className={styles.card__content}>
              <section className={styles['content__image-container']}>
                <img
                  src={item.paraglidingImageUrl}
                  alt={`${item.paraglidingName} 이미지`}
                />
              </section>

              <section className={styles.content__body}>
                <div className={styles.body__text}>
                  <h3>{item.paraglidingName}</h3>
                  <span>{item.paraglidingRegion}</span>
                </div>

                <div className={styles.body__hashtag}>
                  <Hashtag tag={item.touristSpotTag1} />
                  <Hashtag tag={item.touristSpotTag2} />
                </div>
              </section>
            </div>
          </Link>

          <div className={styles.locations}>
            <div className={styles.location}>{item.rlteTatsNm1}</div>
            <div className={styles.location}>{item.rlteTatsNm2}</div>
          </div>

          <hr className={styles.line} />
        </li>
      ))}
    </ul>
  );
}
