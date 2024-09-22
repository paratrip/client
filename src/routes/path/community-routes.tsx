import CommunityHome from '@pages/community/CommunityHome';
import CommunityWrite from '@pages/community/components/CommunityWrite';
import CommunityDetail from '@pages/community/components/CommunityDetail';

export const COMMUNITY_ROUTES = [
  {
    path: 'community',
    element: <CommunityHome />,
    children: [
      { path: 'detail/:boardId', element: <CommunityDetail /> },
      {
        path: 'write',
        element: <CommunityWrite />,
      },
    ],
  },
];
