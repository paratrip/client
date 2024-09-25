import style from './slide.module.css';
import Slider from 'react-slick';
import { TITLE } from '@constants/texts';
import { useNavigate } from 'react-router-dom';

import Card from '../card';
import RecommendLocationCard from '@components/home/recommend-location-card/RecommendCard';
import Icon from '../Icon';

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

interface BoardInfo {
  boardSeq: number;
  title: string;
  location: string;
  content: string;
  updatedAt: string;
  imageURLs: string[];
}

interface MemberInfo {
  memberSeq: number;
  userId: string;
  profileImage: string;
}

interface CountInfo {
  commentCnt: number;
  heartCnt: number;
  scrapCnt: number;
}

interface PopularPostData {
  boardInfo: BoardInfo;
  memberInfo: MemberInfo;
  countInfo: CountInfo;
}

type SliderProps<T> = {
  data: T[];
  sliderType:
    | 'communityTopPost'
    | 'homeRecommendPost'
    | 'homeLocation'
    | 'popularPost';
  filter: boolean;
  moreBtn: boolean;
  moreBtnPath: string;
};

export default function CustomSlider<
  T extends PostData | HomeData | Post | PopularPostData
>(props: SliderProps<T>) {
  const {
    data = [],
    filter = false,
    sliderType = '',
    moreBtn = false,
    moreBtnPath,
  } = props;
  console.log(data);
  const navigate = useNavigate();

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
    navigate(moreBtnPath);
  };

  const handlePostClick = (boardSeq: number) => {
    navigate(`/community/detail/:${boardSeq}`);
  };

  function isPopularPostData(item: any): item is PopularPostData {
    return item && 'boardInfo' in item && 'memberInfo' in item;
  }

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

        {moreBtn && data.length !== 0 && (
          <button className={style.moreBtn} onClick={handleMoreView}>
            더보기
          </button>
        )}
      </div>

      {filter && <>필터</>}

      <div className={style.SliderContainer}>
        {data.length === 0 && (
          <div className={style.noData}>게시글이 없습니다.</div>
        )}
        <Slider {...sliderSettings}>
          {data.map((item, index: number) => {
            if (isPopularPostData(item)) {
              return (
                <div
                  key={index}
                  className={style.SliderItem}
                  onClick={() => handlePostClick(item.boardInfo.boardSeq)}
                >
                  <div
                    className={style.SliderContent}
                    style={{
                      backgroundImage: `url(${item?.boardInfo?.imageURLs[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      cursor: 'pointer',
                    }}
                  >
                    <div className={style.userInfo}>
                      {item?.memberInfo?.profileImage === null ? (
                        <Icon iconType='communityPopularUserDefaultImg' />
                      ) : (
                        <img
                          className={style.userImg}
                          src={item?.memberInfo?.profileImage}
                          alt='user'
                        />
                      )}

                      <p className={style.userName}>
                        {item?.memberInfo?.userId} 님
                      </p>
                    </div>
                    <p className={style.contentText}>
                      {item?.boardInfo?.title}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </div>
    </div>
  );
}
