import sun from '@assets/icons/sun.svg';

import Button from '@components/ui/button';
import MoreHeader from '@components/ui/more-header';
import CustomSlider from '@components/ui/CustomSlider';

import style from './Home.module.css';
import Header from '@components/layouts/Header';

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
        <section className={style.nav__left}>
          <div className={style['left__container-icon']}>
            <img src={sun} alt='' />
            <span>18°</span>
          </div>

          <hr />

          <div className={style.left__container}>
            <p>5mm</p>
          </div>

          <hr />

          <div className={style.left__container}>
            <p>5m/s</p>
          </div>
        </section>
        <section>
          <Button>패글 가능</Button>
        </section>
      </nav>

      <main className={style.main}>
        <section className={style.main__location}>
          <MoreHeader title='지역별 패러글라이딩 장소' to='/' />

          <nav className={style.location__filter}>
            <Button>전체</Button>
          </nav>

          <ul className={style.location__list}>
            <CustomSlider
              data={data}
              sliderType='homeRecommendPost'
              filter={true}
              moreBtn={false}
            />
          </ul>
        </section>

        <section className={style.main__location}>
          <MoreHeader title='지역별 패러글라이딩 장소' to='/' />

          <nav className={style.location__filter}>
            <Button>전체</Button>
          </nav>

          <ul className={style.location__list}>
            <CustomSlider
              data={data}
              sliderType='homeRecommendPost'
              filter={true}
              moreBtn={false}
            />
          </ul>
        </section>

        <section className={style.main__recommend}>
          <header className={style.recommend__header}>
            <h3>패글과 함꼐하는 추천 여행 지역</h3>
          </header>

          <ul className={style.recommend__list}>
            <CustomSlider
              data={locationData}
              sliderType='homeLocation'
              filter={false}
              moreBtn={false}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
