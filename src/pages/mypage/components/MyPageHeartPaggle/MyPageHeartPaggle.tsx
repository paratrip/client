import Header from '@components/layouts/Header';
import style from './MyPageHeartPaggle.module.css';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';
import { useEffect, useState } from 'react';
import ListCard from '@components/ui/list-card';

interface ScrapParaglidingData {
  paraglidingSeq: number;
  name: string;
  heart: number;
  cost: number;
  region: string;
  imageUrl: string;
}

const MyPageHeartPaggle = () => {
  const fetchScrapParaglidingData = useFetch();

  const memberSeq = localStorage.getItem('memberSeq');

  const [scrapParaglidingData, setScrapParaglidingData] = useState<
    ScrapParaglidingData[]
  >([]);

  const [error, setError] = useState<string | null>(null);

  const getScrapParagliding = async () => {
    try {
      const response = await fetchScrapParaglidingData({
        url: `${END_POINT}/paragliding/scrap?memberSeq=${memberSeq}`,
        method: 'get',
      });

      const { status, data } = response;

      if (status === 200) {
        setScrapParaglidingData(data as ScrapParaglidingData[]);
      } else {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getScrapParagliding();
  }, []);

  return (
    <>
      <Header type='back' />
      <div className={style.paggleContainer}>
        <p className={style.mainTitle}>내가 찜한 패글</p>
        {error ? (
          <div className={style.error}>{error}</div>
        ) : (
          <ul>
            {scrapParaglidingData.length > 0 ? (
              scrapParaglidingData.map(item => (
                <ListCard
                  key={item.paraglidingSeq}
                  src={item.imageUrl}
                  title={item.name}
                  likeCount={item.heart}
                  price={item.cost}
                  location={item.region}
                />
              ))
            ) : (
              <div className={style.noData}>내가 찜한 패글이 없습니다</div>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default MyPageHeartPaggle;
