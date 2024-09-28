import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import style from './layout.module.css';

export default function Layout() {
  const location = useLocation();

  const hideNavPaths = ['/community/detail', '/mypage/'];

  const shouldHideNav = hideNavPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className={style.container}>
      <div className={style.outletContainer}>
        <Outlet />
        {!shouldHideNav && <Nav />}
      </div>
    </div>
  );
}
