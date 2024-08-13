import Icon from '@components/ui/Icon';
import style from './Header.module.css';
import { useNavigate } from 'react-router-dom';
type HeaderProps = {
  main?: boolean;
  back?: boolean;
  title?: string;
  onClick?: () => void;
};

const Header = ({
  main = false,
  back = false,
  title = '',
  onClick,
}: HeaderProps) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  return (
    <>
      {main && (
        <header className={style.header}>
          <button>
            <Icon iconType='logo' onClick={goHome} />
          </button>
          <button>
            <Icon iconType='bell' />
          </button>
        </header>
      )}

      {back && (
        <header className={style.backHeader}>
          <button className={style.backIcon}>
            <Icon iconType='back' onClick={onClick} />
          </button>
          <p className={style.title}>{title}</p>
          <div></div>
        </header>
      )}
    </>
  );
};

export default Header;
