import style from './RecommendCard.module.css';

type RecommendCardProps = {
  src: string;
  title: string;
};

export default function RecommendCard(props: RecommendCardProps) {
  const { src, title } = props;

  return (
    <li className={style['recommend-card']}>
      <img src={src} alt={title} />

      <strong>{title}</strong>
    </li>
  );
}
