import Header from '@components/layouts/Header';
import style from './MyPageHome.module.css';
import Icon from '@components/ui/Icon';
import { useNavigate, Outlet } from 'react-router-dom';

const MypageHome = () => {
  const navigate = useNavigate();

  const hideParent =
    location.pathname.includes('/mypage/account') ||
    location.pathname.includes('/mypage/scrap') ||
    location.pathname.includes('/mypage/heart');

  // [ ] 계정 관리 이동 핸들러
  const goAccount = () => {
    navigate('/mypage/account');
  };

  // [ ] 스크랩 이동 핸들러
  const goScrapPost = () => {
    navigate('/mypage/scrap');
  };

  // [ ] 찜 패글 이동 핸들러
  const goHeartPost = () => {
    navigate('/mypage/heart');
  };

  return hideParent ? (
    <Outlet />
  ) : (
    <>
      <Header type='mypage' title='마이페이지' />
      <div className={style.mypageContainer}>
        <div className={style.mypageUserCard}>
          <div className={style.userInfo}>
            <div className={style.userImgBox}>
              {/* <img className={style.userImg} /> */}
              <Icon iconType='userDefaultImg' />
            </div>
            <div className={style.userTextBox}>
              <div className={style.userId}>USER ID</div>
              <div className={style.userEmailBox}>
                <div className={style.userEmail}>USER EMAIL</div>
                <Icon iconType='kakaoTalk' />
              </div>
            </div>
          </div>

          <div className={style.btnBox}>
            <button className={style.btn} onClick={goScrapPost}>
              <Icon iconType='fillScrap' />
              <p>스크랩 게시글</p>
            </button>
            <button className={style.btn} onClick={goHeartPost}>
              <Icon iconType='fillHeart' />
              <p>내가 찜한 패글</p>
            </button>
          </div>
        </div>

        <div className={style.mypageMenu}>
          <div className={style.menuItem} onClick={goAccount}>
            <p>계정 관리</p>
            <Icon iconType='rightArrow' />
          </div>
          <div className={style.menuItem}>
            <p>Paratrip 문의하기</p>
            <Icon iconType='rightArrow' />
          </div>
          <div className={style.menuItem}>
            <p>서비스 약관</p>
            <Icon iconType='rightArrow' />
          </div>
          <div className={style.menuItem}>
            <p>버전</p>
            <p className={style.versionText}>0.0.1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageHome;
