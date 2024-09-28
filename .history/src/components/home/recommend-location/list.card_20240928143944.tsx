import { Link } from 'react-router-dom';
import type { ResponseRecommended } from './recommend-list';
import { transformRegion } from '@utils/helpers/transfrom-region';

import style from './recommend-list.module.css';

type RecommendCardProps = ResponseRecommended;
export default function RecommendLocationCard(props: RecommendCardProps) {
  const { region } = props;

  return (
    <Link to={`/tour-course/${region}`}>
      <li className={style['recommend-card']}>
        <img src={imageUrl} alt={rlteTatsNm} />

        <strong>{transformRegion(region)}</strong>
      </li>
    </Link>
  );
}
