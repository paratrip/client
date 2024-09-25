import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CustomSlider from '@components/ui/CustomSlider';
import CustomPost from '@components/Community/Post';
import style from './CommunityHome.module.css';
import SearchInput from '@components/ui/SearchInput';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '@components/layouts/Header';

import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

import { convertLocationItem } from '@utils/helpers/trasformLocation';

interface BoardCreatorMemberInfo {
  memberSeq: number;
  userId: string;
  profileImage: string;
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
  boardInfo: BoardInfo;
  memberInfo: BoardCreatorMemberInfo;
  countInfo: {
    commentCnt: number;
    heartCnt: number;
    scrapCnt: number;
  };
}

export interface LocationItem {
  region: string;
}

export default function CommunityHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideParent =
    location.pathname.includes('/community/detail') ||
    location.pathname.includes('/community/write');

  const [postToggle, setPostToggle] = useState('all');

  const [popularPostData, setPopularPostData] = useState<PopularPostData[]>([]); // 이번주 인기 게시물
  const [postData, setPostData] = useState<PostData[]>([]); // 전체 게시물
  const [postMineData, setPostMineData] = useState<PostData[]>([]); // 내가 쓴 게시물
  const fetchPost = useFetch();

  const memberSeq = localStorage.getItem('memberSeq');
  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  // [ ] 게시글 탭 변경 핸들러
  const handlePostToggle = (postType: string) => {
    if (postType === 'my' && !isLogIn) {
      alert('로그인 후 사용할 수 있습니다');
      navigate('/auth');
      return;
    }

    if (postToggle !== postType) {
      setPostToggle(postType);
    }
  };
  // [ ] 인기 게시물 데이터 가져오기
  const getPopularPostData = async () => {
    try {
      const response = await fetchPost({
        url: `${END_POINT}/board/popularity?page=0&size=10`,
        method: 'get',
      });

      const { status, data } = response;
      if (status === 200) {
        const convertedData = (data as any).map((item: PopularPostData) => ({
          ...item,
          boardInfo: {
            ...item.boardInfo,
            location: convertLocationItem({ region: item.boardInfo.location })
              .region,
          },
        }));
        setPopularPostData(convertedData);
      }
    } catch (error) {
      console.log(error);
      setPopularPostData([]);
    }
  };

  // [ ] 전체 게시물 데이터 가져오기
  const getAllPostData = async () => {
    try {
      const response = await fetchPost({
        url: `${END_POINT}/board/all?page=0&size=10`,
        method: 'get',
      });

      const { status, data } = response;
      if (status === 200) {
        // location 필드를 한글 이름으로 변환
        const convertedData = (data as any).content.map((item: PostData) => ({
          ...item,
          boardInfo: {
            ...item.boardInfo,
            location: convertLocationItem({ region: item.boardInfo.location })
              .region,
          },
        }));
        setPostData(convertedData);
      }
    } catch (error) {
      console.log(error);
      setPostData([]);
    }
  };

  // [ ] 내가 쓴 게시물 데이터 가져오기
  const getMyPostData = async () => {
    try {
      const response = await fetchPost({
        url: `${END_POINT}/board/my?page=0&size=10&memberSeq=${memberSeq}`,
        method: 'get',
      });

      const { status, data } = response;
      if (status === 200) {
        // location 필드를 한글 이름으로 변환
        const convertedData = (data as any).content.map((item: PostData) => ({
          ...item,
          boardInfo: {
            ...item.boardInfo,
            location: convertLocationItem({ region: item.boardInfo.location })
              .region,
          },
        }));
        setPostMineData(convertedData);
      }
    } catch (error) {
      console.log(error);
      setPostMineData([]);
    }
  };

  const handlePostDeleted = () => {
    getAllPostData();
    getPopularPostData();
    getMyPostData();
  };

  const handleSearchResult = (searchData: PostData[]) => {
    setPostData(searchData);
    setPostToggle('all'); // 검색 결과를 표시할 때 '전체 게시글' 탭으로 전환
  };

  useEffect(() => {
    if (location.pathname === '/community') {
      if (memberSeq === null || memberSeq === '-1') {
        setIsLogIn(false);
      } else {
        setIsLogIn(true);
        getMyPostData();
      }
      getPopularPostData();
      getAllPostData();
    }
  }, [location.pathname, memberSeq]);

  return hideParent ? (
    <Outlet />
  ) : (
    <>
      <Header type='main' />
      <SearchInput onSearchResult={handleSearchResult} />
      <CustomSlider<PopularPostData>
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
              postToggle === 'all'
                ? `${style.postButton} ${style.active}`
                : `${style.postButton}`
            }
            onClick={() => handlePostToggle('all')}
          >
            전체 게시글
          </button>
          <button
            className={
              postToggle === 'my'
                ? `${style.postButton} ${style.active}`
                : `${style.postButton}`
            }
            onClick={() => handlePostToggle('my')}
          >
            내가 쓴 게시글
          </button>
        </div>
        {postToggle === 'all' ? (
          <CustomPost data={postData} postType={'ALL'} />
        ) : postToggle === 'my' ? (
          <CustomPost
            data={postMineData}
            postType={'MY'}
            onPostDeleted={handlePostDeleted}
          />
        ) : null}
      </div>
      <Outlet />
    </>
  );
}
