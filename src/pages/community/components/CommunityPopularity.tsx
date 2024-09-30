import CustomPost from '@components/Community/Post';
import Header from '@components/layouts/Header';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';
import { useEffect, useState } from 'react';
import style from './CommunityPopularity.module.css';
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

interface PopularPostData {
  boardInfo: BoardInfo;
  memberInfo: BoardCreatorMemberInfo;
  countInfo: {
    commentCnt: number;
    heartCnt: number;
    scrapCnt: number;
  };
}

const CommunityPopularity = () => {
  const [popularPostData, setPopularPostData] = useState([]);

  const fetchPopularityData = useFetch();

  // [ ] 인기 게시물 데이터 가져오기
  const getPopularPostData = async () => {
    try {
      const response = await fetchPopularityData({
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
        console.log(convertedData);
        setPopularPostData(convertedData);
      }
    } catch (error) {
      console.log(error);
      setPopularPostData([]);
    }
  };

  useEffect(() => {
    getPopularPostData();
  }, []);

  return (
    <>
      <Header type='back' />
      <div className={style.postContainer}>
        <p className={style.mainTitle}>인기 게시글</p>
        <CustomPost
          data={popularPostData}
          postType={'ALL'}
          myTitle={'스크랩 게시글'}
          iconShow={false}
        />
      </div>
    </>
  );
};

export default CommunityPopularity;
