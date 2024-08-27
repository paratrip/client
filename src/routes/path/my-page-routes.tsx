import MypageHome from '@pages/mypage/MypageHome';
import MyPageAccountManage from '@pages/mypage/components/MyPageAccountManage';
import MyPageScrapPost from '@pages/mypage/components/MyPageScrapPost';
import MyPageHeartPaggle from '@pages/mypage/components/MyPageHeartPaggle';
import MyPageAccountModify from '@pages/mypage/components/MyPageAccountModify';

export const MY_PAGE_ROUTES = [
  {
    path: 'myPage',
    element: <MypageHome />,
    children: [
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
    ],
  },
];
