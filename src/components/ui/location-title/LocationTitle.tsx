import styles from './style.module.css';

type LocationTitleProps = {
  className?: string;
  title: string;
};

export default function LocationTitle(props: LocationTitleProps) {
  const { className = '', title } = props;

  return (
    <strong className={`${className} ${styles['location-title']}`}>
      {title}
    </strong>
  );
}
