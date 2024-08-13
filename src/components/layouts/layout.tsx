import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import style from './layout.module.css';

export default function Layout() {
  return (
    <div className={style.container}>
      <div className={style.outletContainer}>
        <Outlet />
        <Nav />
      </div>
    </div>
  );
}
