import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PostSlider.module.css';

interface PostSliderProps {
  data: string[];
}

const PostSlider = (props: PostSliderProps) => {
  const { data } = props;
  console.log('data', data);
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      {data.length === 1 && (
        <div className={styles.onlyImg}>
          <img src={data[0]} alt={`postImg`} />
        </div>
      )}
      {data.length >= 2 && (
        <>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className={styles.slideItem}>
                <img src={item} alt={`post-${index}`} />
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default PostSlider;
