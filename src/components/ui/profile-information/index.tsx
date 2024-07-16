import { memo } from 'react';

import style from './style.module.css';

type ProfileInformationProps = {
  src: string;
  alt?: string;
  date: string;
  username: string;
};

const ProfileInformation = memo(function ProfileInformation(
  props: ProfileInformationProps
) {
  const { src, alt = '', username, date } = props;

  return (
    <section className={style['profile-information']}>
      <div>
        <img src={src} alt={alt} />
      </div>

      <div className={style.information__information}>
        <strong>{username}</strong>
        <p>{date} 전</p>
      </div>
    </section>
  );
});

export default ProfileInformation;
