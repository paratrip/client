import Icon from '@components/ui/Icon';
import style from './Header.module.css';
import { useNavigate } from 'react-router-dom';
type HeaderProps = {
  type?: 'main' | 'back' | 'mypage';
  title?: string;
  onClick?: () => void;
};

const Header = ({ type = 'main', title = '' }: HeaderProps) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  const goBack = () => {
    navigate(-1);
  };

  const goNotification = () => {
    navigate('/notification');
  };

  return (
    <>
      {type === 'main' && (
        <header className={style.header}>
          <button>
            <Icon iconType='logo' onClick={goHome} />
          </button>
          <button>
            <Icon iconType='bell' onClick={goNotification} />
          </button>
        </header>
      )}

      {type === 'back' && (
        <header className={style.backHeader}>
          <button className={style.backIcon}>
            <Icon iconType='back' onClick={goBack} />
          </button>
          <p className={style.title}>{title}</p>
          <div></div>
        </header>
      )}

      {type === 'mypage' && (
        <header className={style.mypageHeader}>
          <p className={style.mainTitle}>{title}</p>
          <button>
            <Icon iconType='bell' onClick={goNotification} />
          </button>
        </header>
      )}
    </>
  );
};

export default Header;
