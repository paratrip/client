import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PostSlider.module.css';
import { useState } from 'react';

type PostSliderProps = {
  data: Array<{ src: string }>;
};

type SlideCounterProps = {
  currentSlide: number;
  slideCount: number;
};

const SlideCounter = ({ currentSlide, slideCount }: SlideCounterProps) => (
  <div className={styles.slideCounter}>
    {currentSlide + 1} / {slideCount}
  </div>
);

const PostSlider = ({ data }: PostSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className={styles.slideItem}>
            <img src={item.src} alt={`post-${index}`} />
          </div>
        ))}
      </Slider>
      <SlideCounter currentSlide={currentSlide} slideCount={data.length} />
    </div>
  );
};

export default PostSlider;
