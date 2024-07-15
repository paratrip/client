import styles from './style.module.css';

type ImageProps = {
  className?: string;
  src: string;
  alt?: string;
};

export default function Image(props: ImageProps) {
  const { className = '', src, alt } = props;

  return <img className={`${className} ${styles.image}`} src={src} alt={alt} />;
}
