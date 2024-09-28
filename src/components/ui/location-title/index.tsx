import { memo } from 'react';
import { transformRegion } from '@utils/helpers/transfrom-region';

import style from './style.module.css';

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
