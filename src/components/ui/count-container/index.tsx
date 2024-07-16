import { memo } from 'react';

import style from './style.module.css';

type CountContainerProps = {
  className?: string;
  src: string;
  alt?: string;
  count: number;
};

const CountContainer = memo(function CountContainer(
  props: CountContainerProps
) {
  const { className = '', src, alt = '', count } = props;

  return (
    <p className={`${className} ${style['count-container']}`}>
      <img src={src} alt={alt} />

      <span>{count}</span>
    </p>
  );
});
export default CountContainer;
