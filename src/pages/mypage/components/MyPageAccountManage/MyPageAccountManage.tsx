import style from './MyPageAccountManage.module.css';
import Icon from '@components/ui/Icon';
import Header from '@components/layouts/Header';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useModal } from '@hooks/useModal';

interface User {
  memberSeq: number;
  email: string;
  phoneNumber: string;
  userId: string;
  birth: string;
  gender: string;
  profileImage: string;
  kakao: boolean;
}

interface RouteState {
  state: User;
}

const MyPageAccountManage = () => {
  const { openModal, closeModal } = useModal();

  const navigate = useNavigate();
  const userData = (useLocation() as RouteState).state;

  const hideParent = location.pathname.includes('/mypage/account/modify');

  // [x] 계정 수정 페이지로 이동
  const goAccountModify = () => {
    navigate('/mypage/account/modify', { state: userData });
  };

  // [ ] 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('memberSeq');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    closeModal();
    navigate('/home');
  };

  // [ ] 회원탈퇴 핸들러
  const handleWithdraw = () => {
    console.log('회원탈퇴 처리');
    closeModal();
    navigate('/home');
  };

  // [x] 로그아웃, 회원탈퇴 모달 오픈
  const openActiveModal = (type: 'logout' | 'withdraw') => {
    openModal('active', {
      type,
      title:
        type === 'logout' ? '로그아웃 하시겠습니까?' : '회원탈퇴 하시겠습니까?',
      onConfirm: type === 'logout' ? handleLogout : handleWithdraw,
    });
  };

  // [ ] 유저 정보 맵핑 데이터
  const userInputMapping = [
    {
      title: '아이디(닉네임)',
      value: userData.userId,
    },
    {
      title: '생년월일',
      value: userData.birth,
    },
    {
      title: '성별',
      value:
        userData.gender === 'MALE'
          ? '남자'
          : userData.gender === 'FEMALE'
          ? '여자'
          : '',
    },
  ];

  return hideParent ? (
    <Outlet />
  ) : (
    <>
      <Header type='back' title='계정 관리' />
      <div className={style.container}>
        <div className={style.accountContainer}>
          <div className={style.infoModify} onClick={goAccountModify}>
            <p>정보 수정하기</p>
            <Icon iconType='primaryRightArrow' />
          </div>
          <div className={style.userInfo}>
            <div className={style.userImgBox}>
              {userData.profileImage !== null ? (
                <img src={userData.profileImage} className={style.userImg} />
              ) : (
                <Icon iconType='mypageUserDefaultImgBig' />
              )}
            </div>

            <div className={style.userTextBox}>
              <div className={style.userEmailBox}>
                <div className={style.userEmail}>{userData.email}</div>
                {userData.kakao && <Icon iconType='kakaoTalk' />}
              </div>

              <div className={style.userPhoneNumber}>
                {userData.phoneNumber}
              </div>
            </div>
          </div>
          <div className={style.userBox}>
            {userInputMapping.map((item, index) => (
              <div className={style.userInput} key={index}>
                <p className={style.userTitle}>{item.title}</p>
                <p className={style.userValue}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.mypageMenu}>
          <div
            className={`${style.menuItem} ${style.primaryText}`}
            onClick={() => openActiveModal('logout')}
          >
            <p>로그아웃</p>
            <Icon iconType='rightArrow' />
          </div>
          <div
            className={style.menuItem}
            onClick={() => openActiveModal('withdraw')}
          >
            <p>회원탈퇴</p>
            <Icon iconType='rightArrow' />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageAccountManage;
