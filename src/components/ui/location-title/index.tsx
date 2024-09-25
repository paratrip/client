import { memo } from 'react';

import style from './style.module.css';

type LocationTitleProps = {
  className?: string;
  title: string;
};

const LocationTitle = memo(function LocationTitle(props: LocationTitleProps) {
  const { className = '', title } = props;

  return (
    <strong className={`${className} ${style['location-title']}`}>
      {title}
    </strong>
  );
});

export default LocationTitle;
