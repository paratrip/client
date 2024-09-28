import React, { useState, useRef, useEffect } from 'react';

import type { ResponseTourCourse } from '../home/TourCourseHome';

import {
  Map,
  MapMarker,
  Polyline,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';

import AuthHeader from '@components/auth/common/auth-header';
import Hashtag from '@components/ui/hashtag';
import styles from './TourCourseDetail.module.css';
import CourseItem from '@components/tour-course/detail/course-item';
import { useMatch } from 'react-router-dom';
import { useGet } from '@hooks/useGet';
import { END_POINT } from '@utils/endpoint/endpoint';

interface MapCenter {
  lat: number;
  lng: number;
}

const mapCenterValue: MapCenter = {
  lat: 37.5665,
  lng: 126.978,
};

const TourCourseDetail: React.FC = () => {
  const match = useMatch('/course/:id');
  const id = match?.params.id;

  const { data, isLoading, isError, error } = useGet<ResponseTourCourse>({
    url: END_POINTD + '/api/courses/' + id,
  });

  const [path, _setPath] = useState([
    { name: '테스트', lat: 37.5665, lng: 126.978 },
    { name: '테스트', lat: 37.5667, lng: 126.9785 },
    { name: '테스트', lat: 37.5669, lng: 126.979 },
    { name: '테스트', lat: 37.5671, lng: 126.9795 },
  ]);

  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [mapCenter] = useState<MapCenter>(mapCenterValue);

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

  const polylinePath = path.map(loc => ({ lat: loc.lat, lng: loc.lng }));

  return (
    <>
      <AuthHeader />

      <main className={styles.main}>
        <Map
          center={mapCenter}
          level={3}
          style={{
            height: '80%',
            transform: `translateY(${isMinimized ? '0' : '-100px'})`,
            transition: '1s all',
          }}
        >
          {path.map((loc, index) => (
            <>
              <MapMarker
                key={index}
                position={{ lat: loc.lat, lng: loc.lng }}
                clickable={true}
              />
              <CustomOverlayMap
                position={{ lat: loc.lat, lng: loc.lng }}
                yAnchor={4}
              >
                <div className={styles['custom-overlay']}>
                  <p>{loc.name}</p>
                </div>
              </CustomOverlayMap>
            </>
          ))}
          <Polyline
            path={[polylinePath]}
            strokeWeight={5}
            strokeColor='#3434ff'
            strokeOpacity={0.7}
            strokeStyle='solid'
          />
        </Map>

        <section
          ref={sectionRef}
          className={`${styles['main-section']} ${
            isMinimized ? styles.minimized : ''
          }`}
        >
          <button
            className={styles['section__button']}
            onClick={toggleSection}
          />
          <header>
            <div className={styles['section__header']}>
              <h2>
                낮에 보아도 밤에 보아도 아름다운 단양 1박 2일 코스로 여행 즐기고
                2줄 이상 넘어가면 여기까지 올거 같습니다
              </h2>
            </div>

            <div className={styles['section__information']}>
              <p>단양 · 코스 총 거리 14.13km</p>
            </div>

            <div className={styles.section__hashtags}>
              <Hashtag tag='태그' />
              <Hashtag tag='태그' />
            </div>
          </header>

          <hr className={styles.hr} />

          <article className={styles['location-information']}>
            <CourseItem
              image='https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              itemNumber={1}
              locationTitle='플라이 포커스 패러글라이딩 스쿨'
              locationCity='단양'
              locationDistance={1.5}
              travelTime={40}
            ></CourseItem>
            <CourseItem
              image='https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              itemNumber={2}
              locationTitle='플라이 포커스 패러글라이딩 스쿨'
              locationCity='단양'
              locationDistance={1.5}
              travelTime={40}
            ></CourseItem>
            <CourseItem
              image='https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              itemNumber={3}
              locationTitle='플라이 포커스 패러글라이딩 스쿨'
              locationCity='단양'
              locationDistance={1.5}
            ></CourseItem>
          </article>
        </section>
      </main>
    </>
  );
};

export default TourCourseDetail;
