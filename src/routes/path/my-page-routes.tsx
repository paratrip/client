import MypageHome from '@pages/mypage/MypageHome';
import MyPageAccountManage from '@pages/mypage/components/MyPageAccountManage/MyPageAccountManage';
import MyPageScrapPost from '@pages/mypage/components/MyPageScrapPost/MyPageScrapPost';
import MyPageHeartPaggle from '@pages/mypage/components/MyPageHeartPaggle/MyPageHeartPaggle';
import MyPageAccountModify from '@pages/mypage/components/MyPageAccountModify/MyPageAccountModify';
import TermsOfUsePage from '@pages/mypage/components/TermsOfUse';
import ProtectedRoute from '@components/auth/ProtectedRoute';

export const MY_PAGE_ROUTES = [
  {
    path: 'myPage',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <MypageHome />,
      },
      {
        path: 'account',
        element: <MyPageAccountManage />,
        children: [
          {
            path: 'modify',
            element: <MyPageAccountModify />,
          },
        ],
      },
      { path: 'scrap', element: <MyPageScrapPost /> },
      { path: 'heart', element: <MyPageHeartPaggle /> },
      { path: 'termsOfUse', element: <TermsOfUsePage /> },
    ],
  },
];
