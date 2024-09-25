import { transformRegion } from '@utils/helpers/auth/transform-region';
import style from './RecommendLocationCard.module.css';

type RecommendCardProps = {
  region: string;
};

export default function RecommendLocationCard(props: RecommendCardProps) {
  const { region } = props;

  return (
    <li className={style['recommend-card']}>
      <img
        src='https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt={region}
      />

      <strong>{transformRegion(region)}</strong>
    </li>
  );
}
