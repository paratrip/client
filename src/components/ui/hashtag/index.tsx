import { memo } from 'react';

import style from './style.module.css';

type HashtagProps = {
  tag: string;
};

const Hashtag = memo(function index(props: HashtagProps) {
  const { tag } = props;

  return (
    <div className={style.hashtag}>
      <p>#{tag}</p>
    </div>
  );
});

export default Hashtag;
