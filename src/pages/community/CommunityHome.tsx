import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CustomSlider from '@components/ui/CustomSlider';
import CustomPost from '@components/Community/Post';
import style from './CommunityHome.module.css';
import SearchInput from '@components/ui/SearchInput';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@components/layouts/Header';

import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

interface BoardCreatorMemberInfo {
  memberSeq: number;
  userId: string;
}

interface BoardInfo {
  boardSeq: number;
  title: string;
  content: string;
  location: string;
  updatedAt: string;
  imageURLs: string[];
}

interface CountInfo {
  commentCnt: number;
  heart: boolean;
  scrap: boolean;
}

interface commentInfos {
  commentSeq: number;
  comment: string;
  updatedAt: string;
  memberSeq: number;
  userId: string;
}

interface PostData {
  boardCreatorMemberInfo: BoardCreatorMemberInfo;
  boardInfo: BoardInfo;
  countInfo: CountInfo;
  commentInfos: commentInfos[];
}

interface PopularPostData {
  boardCreatorMemberInfo: BoardCreatorMemberInfo;
  boardInfo: BoardInfo;
}

export default function CommunityHome() {
  const location = useLocation();
  const hideParent =
    location.pathname.includes('/community/detail') ||
    location.pathname.includes('/community/write');

  const [postToggle, setPostToggle] = useState(true);

  const [popularPostData, setPopularPostData] = useState<PopularPostData[]>([]); // 이번주 인기 게시물
  const [postData, setPostData] = useState<PostData[]>([]); // 전체 게시물
  const [postMineData, setPostMineData] = useState<PostData[]>([]); // 내가 쓴 게시물

  const fetchPost = useFetch();

  const memberSeq = localStorage.getItem('memberSeq');

  // [ ] 게시글 탭 변경 핸들러
  const handlePostToggle = () => {
    setPostToggle(!postToggle);
  };

  // [ ] 인기 게시물 데이터 가져오기
  const getPopularPostData = () => {
    const fetchData = async () => {
      const response = await fetchPost({
        url: `${END_POINT}/board/popularity?page=0&size=10`,
        method: 'get',
      });

      // console.log(response);
      if (response.status === 200) {
        setPopularPostData(response.data as PopularPostData[]);
      }
    };

    fetchData();
  };

  // [ ] 전체 게시물 데이터 가져오기
  const getAllPostData = () => {
    const fetchData = async () => {
      const response = await fetchPost({
        url: `${END_POINT}/board/all?page=0&size=10`,
        method: 'get',
      });

      if (response.status === 200) {
        setPostData(response.data as PostData[]);
      }
    };

    fetchData();
  };

  // [ ] 내가 쓴 게시물 데이터 가져오기
  const getMyPostData = () => {
    const fetchData = async () => {
      const response = await fetchPost({
        url: `${END_POINT}/board/my?page=0&size=10&memberSeq=${memberSeq}`,
        method: 'get',
      });

      // console.log(response);
      if (response.status === 200) {
        setPostMineData(response.data as PostData[]);
      }
    };

    fetchData();
  };

  useEffect(() => {
    getPopularPostData();
    getAllPostData();

    if (memberSeq !== '-1') {
      getMyPostData();
    }
  }, []);

  // [ ] 검색 핸들러
  const handleSearch = () => {
    console.log('검색');
  };

  return hideParent ? (
    <Outlet />
  ) : (
    <>
      <Header type='main' />
      <SearchInput onClick={handleSearch} />
      <CustomSlider
        data={popularPostData}
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
