import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './CommunityHome.module.css';
import Icon from '@components/ui/Icon';

export default function CommunityHome() {
  const [postToggle, setPostToggle] = useState(true);

  const settings = {
    dots: false,
    infinite: false, // ! true 고민 중
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
  };

  const slidesData = [
    {
      user: '나무의자 님',
      content: '이 풍경 보세요!! 정말 좋은 경험을...',
    },
    {
      user: '나무의자 님',
      content: '이 풍경 보세요!! 정말 좋은 경험을...',
    },
    {
      user: '나무의자 님',
      content: '이 풍경 보세요!! 정말 좋은 경험을...',
    },
    {
      user: '나무의자 님',
      content: '이 풍경 보세요!! 정말 좋은 경험을...',
    },
    {
      user: '나무의자 님',
      content: '이 풍경 보세요!! 정말 좋은 경험을...',
    },
  ];

  const allPosts = (
    <>
      <div className={style.postBox}>
        <div className={style.post}>
          <div className={style.postInfo}>
            <div className={style.textInfo}>
              <div className={style.userInfo}>
                <img className={style.userImg} alt='userImg' />
                <div className={style.userTextBox}>
                  <p className={style.userName}>나무의자 님</p>
                  <p className={style.postDate}>10일 전</p>
                </div>
              </div>
              <h1 className={style.postTitle}>
                혼자서 패러글라이딩 즐기는 방법?
              </h1>
              <p className={style.postLocation}>지역1</p>
            </div>

            <img src='' alt='postImg' />
          </div>

          <div className={style.postButtonWrap}>
            <button className={style.button}>
              <Icon iconType='comment' />
              <p className={style.buttonText}>1</p>
            </button>
            <button className={style.button}>
              <Icon iconType='heart' />
              <p className={style.buttonText}>2</p>
            </button>
            <button className={style.button}>
              <Icon iconType='scrap' />
              <p className={style.buttonText}>3</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
  const myPosts = <>내가 쓴 게시글</>;

  const handlePostToggle = () => {
    setPostToggle(!postToggle);
  };

  return (
    <>
      <div className={style.slideContent}>
        <h1 className={style.title}>이번주 인기 게시글</h1>
        <Slider {...settings}>
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <div className={style.slide}>
                <div className={style.userInfo}>
                  <img className={style.userImg} alt='user' />
                  <p className={style.userName}>{index}나무의자 님</p>
                </div>
                <p className={style.contentText}>
                  이 풍경 보세요!! 정말 좋은 경험을 간직해보세요
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={style.postContainer}>
        <div className={style.buttonWrap}>
          <button
            className={
              postToggle
                ? `${style.postButton} ${style.active}`
                : `${style.postButton}`
            }
            onClick={handlePostToggle}
          >
            전체 게시글
          </button>
          <button
            className={
              postToggle
                ? `${style.postButton}`
                : `${style.postButton} ${style.active}`
            }
            onClick={handlePostToggle}
          >
            내가 쓴 게시글
          </button>
        </div>
        {postToggle ? allPosts : myPosts}

        {/* <button className={style.writeButton}>
          <Icon iconType='write'></Icon>
        </button> */}
      </div>
    </>
  );
}
