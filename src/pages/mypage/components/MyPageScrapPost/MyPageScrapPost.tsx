import Header from '@components/layouts/Header';
import style from './MyPageScrapPost.module.css';
import CustomPost from '@components/Community/Post';
import { useEffect, useState } from 'react';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

const MyPageScrapPost = () => {
  const [scrapPostMineData, setScrapPostMineData] = useState([]);

  const memberSeq = localStorage.getItem('memberSeq');

  const fetchScrapMineData = useFetch();

  // [ ] 스크렙한 게시글 조회 핸들러
  const getScrapPostMineData = async () => {
    try {
      const response = await fetchScrapMineData({
        url: `${END_POINT}/board-scrap?memberSeq=${memberSeq}`,
        method: 'get',
      });

      console.log(response);
      const { status, data } = response;

      if (status === 200) {
        setScrapPostMineData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getScrapPostMineData();
  }, []);

  return (
    <>
      <Header type='back' title='스크랩 게시글' />
      <div className={style.postContainer}>
        <CustomPost
          data={scrapPostMineData}
          postType={'MY'}
          myTitle={'스크랩 게시글'}
          iconShow={false}
        />
      </div>
    </>
  );
};

export default MyPageScrapPost;
