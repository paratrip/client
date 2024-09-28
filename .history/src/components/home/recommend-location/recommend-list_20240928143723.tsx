import Slider from 'react-slick';
import { useGet } from '@hooks/useGet';

import { END_POINT, END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';
import { sliderSettings } from '@components/home/carousel/utils';

import RecommendLocationCard from './list.card';

import styles from './recommend-list.module.css';

export type ResponseRecommended = {
  category: string;
  regionCode: string;
  regionName: string;
  rlteTatsNm: string;
  basicAddress: string;
  imageUrl: string;
  tags: string[];
};

export function RecommendList() {
  const { data, isLoading, isError, error } = useGet<ResponseRecommended[]>({
    url: END_POINT_API_PARAGLIDING + 'region',
    queryKey: ['recommended'],
  });

  if (isLoading) return <div>...Loading</div>;
  if (isError && error) return <div>{error.message}</div>;

  return (
    <div className={styles.SliderContainer}>
      <Slider {...sliderSettings}>
        {data?.map((item, index) => (
          <div key={'*' + index} className={styles.SliderItem}>
            <RecommendLocationCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
