import type { ResponseParagliding } from './types';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { sliderSettings } from './utils';
import Card from '@components/ui/card';

import style from './carousel.module.css';

type CardCarouselProps = {
  data: ResponseParagliding[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
};

export default function CardCarousel({
  data,
  isLoading,
  isError,
  error,
}: CardCarouselProps) {
  if (isLoading) return <div>...Loading</div>;
  if (isError && error) return <div>{error.message}</div>;

  return (
    <ul className={style.location__list}>
      <div className={style.SliderContainer}>
        <Slider {...sliderSettings}>
          {data?.map((item, index: number) => (
            <Link
              to={`${item.id}`}
              key={'*' + index}
              className={style.SliderItem}
            >
              <Card {...item} />
            </Link>
          ))}
        </Slider>
      </div>
    </ul>
  );
}
