import Header from '@components/layouts/Header';
import style from './MyPageHome.module.css';
import Icon from '@components/ui/Icon';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

interface User {
  memberSeq: number;
  email: string;
  phoneNumber: string;
  userId: string;
  birth: string;
  gender: string;
  profileImage: string;
}

const MypageHome = () => {
  const navigate = useNavigate();

  const memberSeq: string | null = localStorage.getItem('memberSeq');
  const fetchUser = useFetch<null, User>();
  const [userData, setUserData] = useState<User>({
    memberSeq: -1,
    email: '',
    phoneNumber: '',
    userId: '',
    birth: '',
    gender: '',
    profileImage: '',
  });

  const hideParent =
    location.pathname.includes('/mypage/account') ||
    location.pathname.includes('/mypage/scrap') ||
    location.pathname.includes('/mypage/heart') ||
    location.pathname.includes('/mypage/termsOfUse');

  // [x] 계정 관리 이동 핸들러
  const goAccount = () => {
    navigate('/mypage/account', { state: userData });
  };

  // [x] 스크랩 이동 핸들러
  const goScrapPost = () => {
    navigate('/mypage/scrap');
  };

  // [x] 찜 패글 이동 핸들러
  const goHeartPost = () => {
    navigate('/mypage/heart');
  };

  // [x] 문의하기 이동 핸들러
  const goContact = () => {
    window.open('https://moaform.com/q/ZsAoQ5', '_blank');
  };

  // [x] 서비스 약관 이동 핸들러
  const goTermsOfUse = () => {
    navigate('/mypage/termsOfUse');
  };

  // [x] 유저 정보 가져오기
  const getUserData = () => {
    const fetchData = async () => {
      try {
        const response = await fetchUser({
          url: `${END_POINT}/member?memberSeq=${memberSeq}`,
          method: 'get',
        });

        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  return hideParent ? (
    <Outlet />
  ) : (
    <>
      <Header type='mypage' title='마이페이지' />
      <div className={style.mypageContainer}>
        <div className={style.mypageUserCard}>
          <div className={style.userInfo}>
            <div className={style.userImgBox}>
              {userData.profileImage !== null ? (
                <img src={userData.profileImage} className={style.userImg} />
              ) : (
                <Icon iconType='mypageUserDefaultImgSmall' />
              )}
            </div>
            <div className={style.userTextBox}>
              <div className={style.userId}>{userData.userId}</div>
              <div className={style.userEmailBox}>
                <div className={style.userEmail}>{userData.email}</div>
                {/* <Icon iconType='kakaoTalk' /> */}
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
          <div className={style.menuItem} onClick={goContact}>
            <p>Paratrip 문의하기</p>
            <Icon iconType='rightArrow' />
          </div>
          <div className={style.menuItem} onClick={goTermsOfUse}>
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
