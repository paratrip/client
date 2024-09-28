import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import style from './layout.module.css';

export default function Layout() {
  const location = useLocation();

  const accessToken = localStorage.getItem('accessToken');

  const hideNavPaths = ['/community/detail', '/mypage/', '/course/'];

  const shouldHideNav = hideNavPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className={style.container}>
      <div className={style.outletContainer}>
        {accessToken ? <Outlet /> : <Navigate to='/' />}
        {!shouldHideNav && <Nav />}
      </div>
    </div>
  );
}
