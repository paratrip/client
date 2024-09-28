import { Link } from 'react-router-dom';
import type { ResponseRecommended } from './recommend-list';

import style from './recommend-list.module.css';

type RecommendCardProps = ResponseRecommended;
export default function RecommendLocationCard(props: RecommendCardProps) {
  const { region } = props;

  return (
    <Link to={`/tour-course/${regionName}`}>
      <li className={style['recommend-card']}>
        <img src={imageUrl} alt={rlteTatsNm} />

        <strong>{region}</strong>
      </li>
    </Link>
  );
}
