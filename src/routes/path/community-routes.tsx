import CommunityHome from '@pages/community/CommunityHome';
import CommunityWrite from '@pages/community/components/CommunityWrite';
import CommunityDetail from '@pages/community/components/CommunityDetail';
import CommunityPopularity from '@pages/community/components/CommunityPopularity';

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
      {
        path: 'popularity',
        element: <CommunityPopularity />,
      },
    ],
  },
];
