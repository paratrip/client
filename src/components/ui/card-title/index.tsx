import { memo } from 'react';
import style from './style.module.css';

type CardTitleProps = {
  className?: string;
  title: string;
};

const CardTitle = memo(function CardTitle(props: CardTitleProps) {
  const { className = '', title } = props;

  return <h3 className={`${className} ${style['card-title']}`}>{title}</h3>;
});

export default CardTitle;
