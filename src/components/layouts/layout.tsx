import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import style from './layout.module.css';

export default function Layout() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.outletContainer}>
        <Outlet />
      </div>
      <Nav />
    </div>
  );
}
