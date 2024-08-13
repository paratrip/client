import MypageHome from '@pages/mypage/MypageHome';
import MyPageAccountManage from '@pages/mypage/components/MyPageAccountManage';
import MyPageClippedPost from '@pages/mypage/components/MyPageClippedPost';
import MyPageSavePaggle from '@pages/mypage/components/MyPageSavePaggle';

export const MY_PAGE_ROUTES = [
  {
    path: 'myPage',
    element: <MypageHome />,
    children: [
      { path: 'account', element: <MyPageAccountManage /> },
      { path: 'post', element: <MyPageClippedPost /> },
      { path: 'paggle', element: <MyPageSavePaggle /> },
    ],
  },
];
