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

                {/* <div className={styles.body__hashtag}>
                  {item.touristSpotTags1?.map(item => (
                    ))}
                    </div> */}
                <Hashtag tag={touristSpotTags1} />
              </section>
            </div>
          </Link>

          <div className={styles.locations}>
            {/* {locations?.map(location => (
              <Link to={location.href}>
                <div className={styles.location}>{location.tag}</div>
              </Link>
            ))} */}
          </div>

          <hr className={styles.line} />
        </li>
      ))}
    </ul>
  );
}
