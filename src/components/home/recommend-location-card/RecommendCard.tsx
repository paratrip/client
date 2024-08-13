import style from './RecommendLocationCard.module.css';

type RecommendCardProps = {
  postImg: string;
  postTitle: string;
};

export default function RecommendLocationCard(props: RecommendCardProps) {
  const { postImg, postTitle } = props;

  return (
    <li className={style['recommend-card']}>
      <img src={postImg} alt={postTitle} />

      <strong>{postTitle}</strong>
    </li>
  );
}
