import { memo } from 'react';
import style from './style.module.css';

type ImageProps = {
  className?: string;
  src: string;
  alt?: string;
};

const Image = memo(function Image(props: ImageProps) {
  const { className = '', src, alt } = props;

  return <img className={`${className} ${style.image}`} src={src} alt={alt} />;
});

export default Image;
