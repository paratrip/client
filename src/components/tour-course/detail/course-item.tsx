import styles from './course-item.module.css';

type CourseItemProps = {
  image: string;
  itemNumber: number;
  locationTitle: string;
  locationCity: string;
  locationDistance: number;
  travelTime?: number;
};

export default function CourseItem(props: CourseItemProps) {
  const {
    image,
    itemNumber,
    locationTitle,
    locationCity,
    locationDistance,
    travelTime,
  } = props;

  return (
    <>
      <div className={styles.information}>
        <section className={styles['information__image-container']}>
          <img src={image} alt={locationTitle} />
        </section>

        <section className={styles.information__container}>
          <span className={styles.container__number}>{itemNumber}</span>
          <h3 className={styles.container__title}>{locationTitle}</h3>
          <p className={styles.container__location}>
            {locationCity} · 내 위치에서 {locationDistance}km
          </p>
        </section>
      </div>

      {travelTime && (
        <div className={styles['information__travel-time-container']}>
          <div className={styles.container__circle} />
          <p className={styles['container__travel-time']}>
            이동시간 {travelTime}분 소요
          </p>
        </div>
      )}
    </>
  );
}
