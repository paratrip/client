import style from './slide.module.css';
import Slider from 'react-slick';
import { TITLE } from '@constants/texts';
import { useNavigate } from 'react-router-dom';

type SliderProps = {
  data: { user: string; userImg: string; postImg: string; postTitle: string }[];
  sliderType: string;
  filter: boolean;
  moreBtn: boolean;
};

export default function CustomSlider(props: SliderProps) {
  const {
    data = [],
    filter = false,
    sliderType = '',
    moreBtn = false,
    ...rest
  } = props;

  const navigetion = useNavigate();

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
  };

  const handleMoreView = () => {
    console.log('더보기 클릭');
    navigetion('/'); //TODO: 더보기 클릭시 이동할 페이지 추가
  };

  return (
    <div className={style.sliderMainContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>
          {sliderType === 'communityTopPost' ? TITLE.COMMUNITY.TOPPOST : 'none'}
        </h1>

        {/* //TODO: 더보기 버튼 클릭시 이동할 페이지 추가 */}
        {moreBtn && (
          <button className={style.moreBtn} onClick={handleMoreView}>
            더보기
          </button>
        )}
      </div>

      {/* //TODO: 필터컴포넌트 만들어서 추가*/}
      {filter && <>필터</>}

      <div className={style.SliderContainer}>
        {sliderType === 'communityTopPost' ? (
          <Slider {...sliderSettings}>
            {data.map((item, index) => (
              <div key={index} className={style.SliderItem}>
                <div className={style.SliderContent}>
                  <div className={style.userInfo}>
                    <img className={style.userImg} alt='user' />
                    <p className={style.userName}>{item.user} 님</p>
                  </div>
                  <p className={style.contentText}>{item.postTitle}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div>여기에 추가</div> // TODO: 슬라이드할 컴포넌트 추가
        )}
      </div>
    </div>
  );
}
