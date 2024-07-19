import sun from '@assets/icons/sun.svg';
import Button from '@components/ui/button';

import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
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

      <main>
        <section>
          <h1>지역별 패러글라이딩 장소</h1>

          <Link to='/'>더보기</Link>
        </section>
      </main>
    </>
  );
}
