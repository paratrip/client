import React, { useEffect, useState } from 'react';

import type { ResponseTourCourse } from '../home/TourCourseHome';

import {
  Map,
  MapMarker,
  Polyline,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';
import { useKakaoLoader } from '@hooks/useKaKaoLoader';
import { useSetMaker } from './useSetMaker';

import AuthHeader from '@components/auth/common/auth-header';

import { useMatch } from 'react-router-dom';
import { useGet } from '@hooks/useGet';
import { END_POINT } from '@utils/endpoint/endpoint';
import { TourCourseNavigation } from './TourCourseNavigation';

import styles from './TourCourseDetail.module.css';

const TourCourseDetail: React.FC = () => {
  useKakaoLoader();

  const match = useMatch('/course/:id');
  const id = match?.params.id;

  const { data, isLoading, isError, error } = useGet<ResponseTourCourse>({
    url: END_POINT + '/api/courses/' + id,
    queryKey: ['courses', 'detail', String(id)],
  });

  const [mapCenterLat, setMapCenterLat] = useState<number>(37.5665);
  const [mapCenterLng, setMapCenterLng] = useState<number>(126.978);
  const [middleLatCourse, setMiddleLatCourse] = useState<number>(0);
  const [middleLngCourse, setMiddleLngCourse] = useState<number>(0);
  const [lastLatCourse, setLastLatCourse] = useState<number>(0);
  const [lastLngCourse, setLastLngCourse] = useState<number>(0);

  const [path, setPath] = useState([
    { name: data?.paraglidingName, lat: mapCenterLat, lng: mapCenterLng },
    {
      name: data?.touristSpotName1,
      lat: middleLatCourse,
      lng: middleLngCourse,
    },
    { name: data?.touristSpotName2, lat: lastLatCourse, lng: lastLngCourse },
  ]);

  useSetMaker(
    data?.paraglidingName as string,
    setMapCenterLat,
    setMapCenterLng
  );

  useSetMaker(
    data?.touristSpotName1 as string,
    setMiddleLatCourse,
    setMiddleLngCourse
  );

  useSetMaker(
    data?.touristSpotName1 as string,
    setLastLatCourse,
    setLastLngCourse
  );

  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const polylinePath = path.map(loc => ({ lat: loc.lat, lng: loc.lng }));

  useEffect(() => {
    const newPoly = [
      {
        name: data?.paraglidingName,
        lat: mapCenterLat,
        lng: mapCenterLng,
      },
      {
        name: data?.touristSpotName1,
        lat: middleLatCourse,
        lng: middleLngCourse,
      },
      {
        name: data?.touristSpotName2,
        lat: lastLatCourse,
        lng: lastLngCourse,
      },
    ];

    setPath(newPoly);
  }, [
    mapCenterLat,
    mapCenterLng,
    middleLatCourse,
    middleLngCourse,
    lastLatCourse,
    lastLngCourse,
  ]);

  if (isLoading) return <div>...Loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <AuthHeader />

      <main className={styles.main}>
        <Map
          center={{
            lat: mapCenterLat,
            lng: mapCenterLng,
          }}
          level={3}
          style={{
            height: '80%',
            transform: `translateY(${isMinimized ? '0' : '-100px'})`,
            transition: '1s all',
          }}
        >
          <>
            <MapMarker
              position={{ lat: mapCenterLat, lng: mapCenterLng }}
              clickable={true}
            />
            <MapMarker
              position={{ lat: middleLatCourse, lng: middleLngCourse }}
              clickable={true}
            />
            <MapMarker
              position={{ lat: lastLatCourse, lng: lastLngCourse }}
              clickable={true}
            />
            <CustomOverlayMap
              position={{ lat: Number(0)!, lng: Number(0)! }}
              yAnchor={4}
            >
              <div className={styles['custom-overlay']}>
                <p>{data?.paraglidingName}</p>
              </div>
            </CustomOverlayMap>
          </>
          <Polyline
            path={[polylinePath]}
            strokeWeight={5}
            strokeColor='#3434ff'
            strokeOpacity={0.7}
            strokeStyle='solid'
          />
        </Map>

        <TourCourseNavigation
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
          paraglidingRegion={data?.paraglidingRegion ?? ''}
          touristSpotTag1={data?.touristSpotTag1 ?? ''}
          touristSpotTag2={data?.touristSpotTag2 ?? '' ?? ''}
          paraglidingName={data?.paraglidingName ?? ''}
          touristSpotName1={data?.touristSpotName1 ?? ''}
          touristSpotName2={data?.touristSpotName2 ?? ''}
          paraglidingImageUrl={data?.paraglidingImageUrl ?? ''}
          touristSpotImageUrl1={data?.touristSpotImageUrl1 ?? ''}
          touristSpotImageUrl2={data?.touristSpotImageUrl2 ?? ''}
        />
      </main>
    </>
  );
};

export default TourCourseDetail;
