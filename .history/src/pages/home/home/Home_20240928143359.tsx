import Header from '@components/layouts/Header';

import Button from '@components/ui/button';
import MoreHeader from '@components/ui/more-header';

import Container from '@components/ui/container';
import LocationListCarousel from '@components/home/carousel/location-list';
import LikesList from '@components/home/carousel/likes-list.carousel';

import style from './Home.module.css';
import RegionTags from '@components/home/carousel/region-tags';
import { RecommendList } from '@components/home/recommend-location/recommend-list';

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
