import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CustomSlider from '@components/ui/CustomSlider';
import CustomPost from '@components/Community/Post';
import style from './CommunityHome.module.css';
import SearchInput from '@components/ui/SearchInput';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@components/layouts/Header';

export default function CommunityHome() {
  const location = useLocation();
  const hideParent =
    location.pathname.includes('/community/detail') ||
    location.pathname.includes('/community/write');

  const [postToggle, setPostToggle] = useState(true);

  const handlePostToggle = () => {
    setPostToggle(!postToggle);
  };
  // 임시 데이터
  const slidesData = [
    {
      user: '나무의자1',
      userImg: '',
      postImg: '',
      postTitle: '1이 풍경 보세요!! 정말 좋은 경험을 간직해보세요1',
    },
    {
      user: '나무의자2',
      userImg: '',
      postImg: '',
      postTitle: '2이 풍경 보세요!! 정말 좋은 경험을 간직해보세요2',
    },
    {
      user: '나무의자3',
      userImg: '',
      postImg: '',
      postTitle: '3이 풍경 보세요!! 정말 좋은 경험을 간직해보세요3',
    },
    {
      user: '나무의자4',
      userImg: '',
      postImg: '',
      postTitle: '4이 풍경 보세요!! 정말 좋은 경험을 간직해보세요4',
    },
    {
      user: '나무의자5',
      userImg: '',
      postImg: '',
      postTitle: '5이 풍경 보세요!! 정말 좋은 경험을 간직해보세요5',
    },
  ];
  const postData = [
    {
      userName: '나무의자1',
      userImg: '',
      postImg: '',
      postTitle:
        '1이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요1',
      postDate: '1일 전',
      location: '지역1',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
    {
      userName: '나무의자2',
      userImg: '',
      postImg: '',
      postTitle: '2이 풍경 보세요!! 정말 좋은 경험을 간직해보세요2',
      postDate: '2일 전',
      location: '지역2',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
    {
      userName: '나무의자3',
      userImg: '',
      postImg: '',
      postTitle: '3이 풍경 보세요!! 정말 좋은 경험을 간직해보세요3',
      postDate: '3일 전',
      location: '지역3',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
    {
      userName: '나무의자4',
      userImg: '',
      postImg: '',
      postTitle: '4이 풍경 보세요!! 정말 좋은 경험을 간직해보세요4',
      postDate: '4일 전',
      location: '지역4',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
    {
      userName: '나무의자5',
      userImg: '',
      postImg: '',
      postTitle: '5이 풍경 보세요!! 정말 좋은 경험을 간직해보세요5',
      postDate: '5일 전',
      location: '지역5',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
  ];
  const postMineData = [
    {
      userName: '나무의자1',
      userImg: '',
      postImg: '',
      postTitle:
        '1이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요1',
      postDate: '1일 전',
      location: '지역1',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
    {
      userName: '나무의자2',
      userImg: '',
      postImg: '',
      postTitle: '2이 풍경 보세요!! 정말 좋은 경험을 간직해보세요2',
      postDate: '2일 전',
      location: '지역2',
      postStatus: {
        comment: 1,
        heart: 2,
        scrap: 3,
      },
    },
  ];

  // [ ] 검색 핸들러
  const handleSearch = () => {
    console.log('검색');
  };

  return hideParent ? (
    <Outlet />
  ) : (
    <>
      <Header main={true} />
      <SearchInput onClick={handleSearch} />
      <CustomSlider
        data={slidesData}
        sliderType={'communityTopPost'}
        filter={false}
        moreBtn={true}
        moreBtnPath={'/community'}
      />
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
        {postToggle ? (
          <CustomPost data={postData} postType={'ALL'} />
        ) : (
          <CustomPost data={postMineData} postType={'MY'} />
        )}
      </div>
      <Outlet />
    </>
  );
}
