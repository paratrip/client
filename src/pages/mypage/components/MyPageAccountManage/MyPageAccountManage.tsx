import React from 'react';
import style from './MyPageAccountManage.module.css';
import Icon from '@components/ui/Icon';
import Header from '@components/layouts/Header';
import { useNavigate, Outlet } from 'react-router-dom';
import { useModal } from '@hooks/useModal';

const MyPageAccountManage = () => {
  const { openModal } = useModal();

  const naivgate = useNavigate();

  const hideParent = location.pathname.includes('/mypage/account/modify');

  // [x] 계정 수정 페이지로 이동
  const goAccountModify = () => {
    console.log('goAccountModify');
    naivgate('/mypage/account/modify');
  };

  // [ ] 로그아웃 핸들러
  const handleLogout = () => {
    console.log('로그아웃 처리');
    // navigate('/home');
  };

  // [ ] 회원탈퇴 핸들러
  const handleWithdraw = () => {
    console.log('회원탈퇴 처리');
    // navigate('/home');
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
      value: 'qwerasdf1234',
    },
    {
      title: '생년월일',
      value: '19990909',
    },
    {
      title: '성별',
      value: '남자',
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
            <Icon iconType='userDefaultImg' />
            <div className={style.userTextBox}>
              <div className={style.userEmailBox}>
                <div className={style.userEmail}>email@email.com</div>
                <Icon iconType='kakaoTalk' />
              </div>

              <div className={style.userPhoneNumber}>010-0000-0000</div>
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
