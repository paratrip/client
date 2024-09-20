import style from './slide.module.css';
import Slider from 'react-slick';
import { TITLE } from '@constants/texts';
import { useNavigate } from 'react-router-dom';

import Card from '../card';
import RecommendLocationCard from '@components/home/recommend-location-card/RecommendCard';

type Post = {
  postImg: string;
  postTitle: string;
};

type PostData = {
  user: string;
  userImg: string;
} & Post;

type HomeData = {
  postImg: string;
  postTitle: string;
  location: string;
  likeCount: number;
  price: number;
} & Post;

interface BoardCreatorMemberInfo {
  memberSeq: number;
  userId: string;
}

interface BoardInfo {
  boardSeq: number;
  title: string;
  content: string;
  location: string;
  updatedAt: string;
  imageURLs: string[];
}
interface PopularPostData {
  boardCreatorMemberInfo: BoardCreatorMemberInfo;
  boardInfo: BoardInfo;
}

type SliderProps = {
  data: PostData[] | HomeData[] | Post[] | PopularPostData[];
  sliderType:
    | 'communityTopPost'
    | 'homeRecommendPost'
    | 'homeLocation'
    | 'popularPost';
  filter: boolean;
  moreBtn: boolean;
  moreBtnPath: string;
};

export default function CustomSlider(props: SliderProps) {
  const {
    data = [],
    filter = false,
    sliderType = '',
    moreBtn = false,
    moreBtnPath,
    ...rest
  } = props;
  console.log(data);
  const navigation = useNavigate();

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
    // navigetion('/'); //TODO: 더보기 클릭시 이동할 페이지 추가
    navigation(moreBtnPath);
  };

  // 지역별 패러글라이딩 장소 추천
  if (sliderType === 'homeRecommendPost') {
    return (
      <div className={style.SliderContainer}>
        <Slider {...sliderSettings}>
          {(data as HomeData[]).map((item: HomeData, index: number) => (
            <div key={'*' + index} className={style.SliderItem}>
              <Card {...item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  // 지역 추천
  if (sliderType === 'homeLocation') {
    return (
      <div className={style.SliderContainer}>
        <Slider {...sliderSettings}>
          {(data as Post[]).map((item: Post, index: number) => (
            <div key={'*' + index} className={style.SliderItem}>
              <RecommendLocationCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className={style.sliderMainContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>{TITLE.COMMUNITY.TOPPOST}</h1>

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
        <Slider {...sliderSettings}>
          {data.map((item, index: number) => (
            <div key={index} className={style.SliderItem}>
              <div
                className={style.SliderContent}
                style={{
                  backgroundImage: `url(${item?.boardInfo?.imageURLs[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className={style.userInfo}>
                  <img
                    className={style.userImg}
                    src={item?.boardCreatorMemberInfo?.profileImage}
                    alt='user'
                  />
                  <p className={style.userName}>
                    {item?.boardCreatorMemberInfo?.userId} 님
                  </p>
                </div>
                <p className={style.contentText}>{item?.boardInfo?.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
