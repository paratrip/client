import type { ResponseParaglidingRegion } from './types';

import Slider from 'react-slick';
import { transformRegion } from '@utils/helpers/transfrom-region';
import { sliderSettings } from './utils';

import style from './carousel.module.css';
import Button from '@components/ui/button';
import { useMutate } from '@hooks/useMutate';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';

type RegionTagsCarouselProps = {
  data: ResponseParaglidingRegion[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
};

export default function RegionTagsCarousel({
  data,
  isLoading,
  isError,
  error,
}: RegionTagsCarouselProps) {
  const filterMutate = useMutate<unknown, Error, string>({
    url: END_POINT_API_PARAGLIDING + '/list',
    method: 'POST',
    queryKey: ['paragliding'],
    errorMessage: '필터링 실패. 다시 시도해주세요.',
  });

  if (isLoading) return <div>...Loading</div>;
  if (isError && error) return <div>{error.message}</div>;

  const handleFilter = (region: string) => {
    filterMutate.mutate(region);
  };

  return (
    <ul className={style.location__list}>
      {filterMutate.useMutateMessage && (
        <div className={style.mutateMessage}>
          {filterMutate.useMutateMessage}
        </div>
      )}
      <div className={style.SliderContainer}>
        <Slider {...sliderSettings}>
          <div className={style.SliderItem}>
            <Button onClick={() => handleFilter('all')}>전체</Button>
          </div>
          {data?.map((item, index: number) => (
            <div key={'r' + index} className={style.SliderItem}>
              <Button
                onClick={() => handleFilter(item.region)}
                disabled={filterMutate.isPending}
              >
                {transformRegion(item.region)}
              </Button>
            </div>
          ))}
        </Slider>
      </div>
    </ul>
  );
}
