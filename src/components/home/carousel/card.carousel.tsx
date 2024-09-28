import type { ResponseParagliding } from './types';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { sliderSettings } from './utils';
import Card from '@components/ui/card';

import style from './carousel.module.css';

type CardCarouselProps = {
  data: ResponseParagliding[] | undefined;
};

export default function CardCarousel({ data }: CardCarouselProps) {
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
