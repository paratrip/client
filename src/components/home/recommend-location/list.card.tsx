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
        <img
          src='https://plus.unsplash.com/premium_photo-1661886333708-877148b43ae1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt={region}
        />

        <strong>{transformRegion(region!)}</strong>
      </li>
    </Link>
  );
}
