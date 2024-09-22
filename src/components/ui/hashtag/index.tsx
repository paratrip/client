import { memo } from 'react';

import { Link } from 'react-router-dom';

import style from './style.module.css';

type HashtagProps = {
  tag: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Hashtag = memo(function index(props: HashtagProps) {
  const { tag, href } = props;

  return (
    <Link to={href as string}>
      <div className={style.hashtag}>
        <p>#{tag}</p>
      </div>
    </Link>
  );
});

export default Hashtag;
