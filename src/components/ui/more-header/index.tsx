import { memo } from 'react';
import { Link } from 'react-router-dom';

import chevron_right from '@assets/icons/chevron_right.svg';

import style from './style.module.css';

type MoreHeaderProps = {
  className?: string;
  title: string;
  to: string;
};

const MoreHeader = memo(function MoreHeader(props: MoreHeaderProps) {
  const { className, title, to } = props;

  return (
    <header className={`${className} ${style['more-header']}`}>
      <h3>{title}</h3>
      <Link to={to}>
        <span>
          <p>더보기</p> <img src={chevron_right} alt='더보기' />
        </span>
      </Link>
    </header>
  );
});

export default MoreHeader;
