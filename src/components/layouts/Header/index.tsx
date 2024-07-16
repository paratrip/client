import Icon from '@components/ui/Icon';
import style from './Header.module.css';
const Header = () => {
  return (
    <header className={style.header}>
      <button>
        <Icon iconType='logo' />
      </button>
      <button>
        <Icon iconType='bell' />
      </button>
    </header>
  );
};

export default Header;
