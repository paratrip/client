import { memo } from 'react';

import style from './style.module.css';
import { transformRegion } from '@utils/helpers/auth/transform-region';

type LocationTitleProps = {
  className?: string;
  title: string;
};

const LocationTitle = memo(function LocationTitle(props: LocationTitleProps) {
  const { className = '', title } = props;

  return (
    <strong className={`${className} ${style['location-title']}`}>
      {transformRegion(title)}
    </strong>
  );
});

export default LocationTitle;
