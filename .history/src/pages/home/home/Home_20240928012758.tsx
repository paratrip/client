import Header from '@components/layouts/Header';

import Button from '@components/ui/button';
import MoreHeader from '@components/ui/more-header';
import CustomSlider from '@components/ui/CustomSlider';

import Container from '@components/ui/container';
import LocationListCarousel from '@components/home/carousel/location-list';
import LikesList from '@components/home/carousel/likes-list.carousel';

import style from './Home.module.css';
import RegionTags from '@components/home/carousel/region-tags';
import { RecommendList } from '@components/home/recommend-location/recommend-list';

const locationData = [
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '서울',
  },
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '제주',
  },
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '영월',
  },
  {
    postImg:
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800',
    postTitle: '부산',
  },
];

export default function Home() {
  return (
    <>
      <Header type='main' />
      <nav className={style.nav}>
        <section>
          <Button>패글 가능</Button>
        </section>
      </nav>

      <Container>
        <section className={style.main__location}>
          <MoreHeader title='지역별 패러글라이딩 장소' to='location' />

          <nav className={style.location__filter}>
            <RegionTags />
          </nav>

          <LocationListCarousel />
        </section>

        <section className={style.main__location}>
          <MoreHeader title='인기 TOP 패러글라이딩' to='popular' />

          <LikesList />
        </section>

        <section className={style.main__recommend}>
          <header className={style.recommend__header}>
            <h3>패글과 함꼐하는 추천 여행 지역</h3>
          </header>

          <RecommendList />
        </section>
      </Container>
    </>
  );
}
