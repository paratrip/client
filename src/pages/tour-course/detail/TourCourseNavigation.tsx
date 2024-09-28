import { useRef, useEffect } from 'react';

import CourseItem from '@components/tour-course/detail/course-item';
import Hashtag from '@components/ui/hashtag';

import styles from './TourCourseDetail.module.css';

type TourCourseNavigationProps = {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
  paraglidingRegion: string;
  touristSpotTag1: string;
  touristSpotTag2: string;
  paraglidingImageUrl: string;
  paraglidingName: string;
  touristSpotImageUrl1: string;
  touristSpotName1: string;
  touristSpotName2: string;
  touristSpotImageUrl2: string;
};

export function TourCourseNavigation({
  isMinimized,
  setIsMinimized,
  paraglidingRegion,
  paraglidingName,
  touristSpotName1,
  touristSpotName2,
  touristSpotTag1,
  touristSpotTag2,
  paraglidingImageUrl,
  touristSpotImageUrl1,
  touristSpotImageUrl2,
}: TourCourseNavigationProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>): void => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>): void => {
    currentY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (): void => {
    const diff = startY.current - currentY.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && isMinimized) {
        setIsMinimized(false);
      } else if (diff < 0 && !isMinimized) {
        setIsMinimized(true);
      }
    }
  };

  const toggleSection = (): void => {
    setIsMinimized(prev => !prev);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      section.addEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      section.addEventListener(
        'touchend',
        handleTouchEnd as unknown as EventListener
      );

      return () => {
        section.removeEventListener(
          'touchstart',
          handleTouchStart as unknown as EventListener
        );
        section.removeEventListener(
          'touchmove',
          handleTouchMove as unknown as EventListener
        );
        section.removeEventListener(
          'touchend',
          handleTouchEnd as unknown as EventListener
        );
      };
    }
  }, [isMinimized]);

  return (
    <section
      ref={sectionRef}
      className={`${styles['main-section']} ${
        isMinimized ? styles.minimized : ''
      }`}
    >
      <button className={styles['section__button']} onClick={toggleSection} />
      <header>
        <div className={styles['section__header']}>
          <h2>{paraglidingName ?? ''}</h2>
        </div>

        <div className={styles['section__information']}>
          <p>{paraglidingRegion ?? ''} · 코스 총 거리 14.13km</p>
        </div>

        <div className={styles.section__hashtags}>
          <Hashtag tag={touristSpotTag1 ?? ''} />
          <Hashtag tag={touristSpotTag2 ?? ''} />
        </div>
      </header>

      <hr className={styles.hr} />

      <article className={styles['location-information']}>
        <CourseItem
          image={paraglidingImageUrl ?? ''}
          itemNumber={1}
          locationTitle={paraglidingName ?? ''}
          locationCity='단양'
          locationDistance={1.5}
          travelTime={40}
        ></CourseItem>
        <CourseItem
          image={touristSpotImageUrl1 ?? ''}
          itemNumber={2}
          locationTitle={touristSpotName1 ?? ''}
          locationCity='단양'
          locationDistance={1.5}
          travelTime={40}
        ></CourseItem>
        <CourseItem
          image={touristSpotImageUrl2 ?? ''}
          itemNumber={3}
          locationTitle={touristSpotName2 ?? ''}
          locationCity='단양'
          locationDistance={1.5}
        ></CourseItem>
      </article>
    </section>
  );
}
