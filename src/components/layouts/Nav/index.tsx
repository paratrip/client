// Nav.js
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '@components/ui/Icon';
import style from './Nav.module.css';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const buttons = [
    { path: '/', iconType: 'home', title: '홈' },
    { path: '/tour-course', iconType: 'tour-course', title: '관광코스' },
    { path: '/community', iconType: 'community', title: '커뮤니티' },
    { path: '/mypage', iconType: 'mypage', title: '마이페이지' },
  ];

  return (
    <nav className={style.nav}>
      {buttons.map(button => (
        <button
          key={button.path}
          className={`${style.navButton} ${
            currentPath === button.path ? style.active : ''
          }`}
          onClick={() => navigate(button.path)}
        >
          <Icon
            iconType={button.iconType}
            isActive={currentPath === button.path}
          />
          <p
            className={`${style.navButtonTitle} ${
              currentPath === button.path ? style.activeText : ''
            }`}
          >
            {button.title}
          </p>
        </button>
      ))}
    </nav>
  );
};

export default Nav;
