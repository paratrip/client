import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

import marker from '@assets/icons/marker.svg';
import styles from './content.module.css';

type ContentMap = {
  name: string;
  latitude: number;
  longitude: number;
};

export default function ContentMap(props: ContentMap) {
  const { latitude, longitude, name } = props;

  return (
    <Map // 지도를 표시할 Container
      id='map'
      center={{
        // 지도의 중심좌표
        lat: latitude,
        lng: longitude,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '350px',
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapMarker
        position={{
          lat: latitude,
          lng: longitude,
        }}
        image={{
          src: marker,
          size: {
            width: 24,
            height: 32,
          },
        }}
      ></MapMarker>
      <CustomOverlayMap
        position={{ lat: latitude, lng: longitude }}
        yAnchor={1}
      >
        <div className={styles['content-map__custom-overlay']}>
          <span className={styles.overlay__title}>{name}</span>
        </div>
      </CustomOverlayMap>
    </Map>
  );
}
