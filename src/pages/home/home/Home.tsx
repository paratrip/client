import Header from '@components/layouts/Header';

import MoreHeader from '@components/ui/more-header';
import CustomSlider from '@components/ui/CustomSlider';

import style from './Home.module.css';
import Container from '@components/ui/container';
import { useFetchQuery } from '@hooks/useFetchQuery';
import { END_POINT_PARAGLIDING } from '@utils/endpoint/endpoint';

const data = [
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '타이틀 헤헤',
    likeCount: 10,
    price: 155500,
    location: '서울',
  },
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '타이틀 헤헤1',
    likeCount: 10,
    price: 155500,
    location: '서울',
  },

  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '타이틀 헤헤2',
    likeCount: 10,
    price: 155500,
    location: '서울',
  },
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '타이틀 헤헤3',
    likeCount: 10,
    price: 155500,
    location: '서울',
  },
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '타이틀 헤헤4',
    likeCount: 10,
    price: 155500,
    location: '서울',
  },
];

export default function Home() {
  const { data: region } = useFetchQuery({
    url: END_POINT_PARAGLIDING + '/region',
    queryKey: ['region'],
  });

  return (
    <>
      <Header type='main' />

      <Container>
        <section className={style.main__location}>
          <MoreHeader title='지역별 패러글라이딩 장소' to='location' />

          <nav className={style.location__filter}>
            <CustomSlider
              data={region}
              sliderType='homeTag'
              filter={false}
              moreBtn={false}
              moreBtnPath=''
            />
          </nav>

          <ul className={style.location__list}>
            <CustomSlider
              data={data}
              sliderType='homeRecommendPost'
              filter={true}
              moreBtn={false}
              moreBtnPath=''
            />
          </ul>
        </section>

        <section className={style.main__location}>
          <MoreHeader title='인기 TOP 패러글라이딩' to='popular' />

          <nav className={style.location__filter}></nav>

          <ul className={style.location__list}>
            <CustomSlider
              data={data}
              sliderType='homeRecommendPost'
              filter={true}
              moreBtn={false}
              moreBtnPath=''
            />
          </ul>
        </section>

        <section className={style.main__recommend}>
          <header className={style.recommend__header}>
            <h3>패글과 함꼐하는 추천 여행 지역</h3>
          </header>

          <ul className={style.recommend__list}>
            <CustomSlider
              data={region}
              sliderType='homeLocation'
              filter={false}
              moreBtn={false}
              moreBtnPath=''
            />
          </ul>
        </section>
      </Container>
    </>
  );
}
