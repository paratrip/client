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
  onRegion?: (region: string) => void;
};

export default function RegionTagsCarousel({
  data,
  onRegion = () => {},
}: RegionTagsCarouselProps) {
  return (
    <ul className={style.location__list}>
      <div className={style.SliderContainer}>
        <Slider {...sliderSettings}>
          <div className={style.SliderItem}>
            <Button onClick={() => onRegion('')}>전체</Button>
          </div>
          {data?.map((item, index: number) => (
            <div key={'r' + index} className={style.SliderItem}>
              <Button onClick={() => onRegion(item.region)}>
                {transformRegion(item.region)}
              </Button>
            </div>
          ))}
        </Slider>
      </div>
    </ul>
  );
}
