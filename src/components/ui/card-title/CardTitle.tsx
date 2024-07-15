import styles from './style.module.css';

type CardTitleProps = {
  className?: string;
  title: string;
};

export default function CardTitle(props: CardTitleProps) {
  const { className = '', title } = props;

  return <h3 className={`${className} ${styles['card-title']}`}>{title}</h3>;
}
