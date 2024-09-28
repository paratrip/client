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
    url: END_POINT + '/api/courses/' + id,
    queryKey: ['courses', 'detail', String(id)],
  });

  const [path, _setPath] = useState([
    { name: '테스트', lat: 37.5665, lng: 126.978 },
    { name: '테스트', lat: 37.5667, lng: 126.9785 },
    { name: '테스트', lat: 37.5669, lng: 126.979 },
    { name: '테스트', lat: 37.5671, lng: 126.9795 },
  ]);

  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [map, setMap] = useState<MapCenter>(mapCenterValue);

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

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch('이태원 맛집', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK && data.length > 0) {
        // 첫 번째 결과의 좌표만 사용
        const firstResult = data[0];
        const position = new kakao.maps.LatLng(firstResult.y, firstResult.x);

        // 마커 생성
        const marker = {
          position: {
            lat: firstResult.y,
            lng: firstResult.x,
          },
          content: firstResult.place_name,
        };

        setMarkers([marker]); // 단일 마커만 설정

        // 지도 중심을 첫 번째 결과의 위치로 이동
        map.setCenter(position);

        // 적절한 줌 레벨 설정 (예: 3)
        map.setLevel(3);
      }
    });
  }, [map]);

  if (isLoading) return <div>...Loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <AuthHeader />

      <main className={styles.main}>
        <Map
          center={map}
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
              <p>{data?.paraglidingRegion ?? ''} · 코스 총 거리 14.13km</p>
            </div>

            <div className={styles.section__hashtags}>
              <Hashtag tag={data?.touristSpotTag1 ?? ''} />
              <Hashtag tag={data?.touristSpotTag2 ?? ''} />
            </div>
          </header>

          <hr className={styles.hr} />

          <article className={styles['location-information']}>
            <CourseItem
              image={data?.paraglidingImageUrl ?? ''}
              itemNumber={1}
              locationTitle={data?.paraglidingName ?? ''}
              locationCity='단양'
              locationDistance={1.5}
              travelTime={40}
            ></CourseItem>
            <CourseItem
              image={data?.touristSpotImageUrl1 ?? ''}
              itemNumber={2}
              locationTitle={data?.touristSpotName1 ?? ''}
              locationCity='단양'
              locationDistance={1.5}
              travelTime={40}
            ></CourseItem>
            <CourseItem
              image={data?.touristSpotImageUrl2 ?? ''}
              itemNumber={3}
              locationTitle={data?.touristSpotName2 ?? ''}
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
