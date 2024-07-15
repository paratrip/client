import chevron_left from '@assets/icons/chevron_left.svg';

import styles from './style.module.css';

type MoreHeaderProps = {
  className?: string;
  title: string;
};

export default function MoreHeader(props: MoreHeaderProps) {
  const { className, title } = props;

  return (
    <header className={`${className} ${styles['more-header']}`}>
      <h3>{title}</h3>
      <span>
        <p>더보기</p> <img src={chevron_left} alt='더보기' />
      </span>
    </header>
  );
}
