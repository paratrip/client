import Home from '@pages/home/home/Home';
import Detail from '@pages/home/detail/Detail';
import Location from '@pages/home/location/Location';
import Popular from '@pages/home/popular/Popular';

export const HOME_ROUTES = [
  {
    path: '/home',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/:id',
        element: <Detail />,
      },
    ],
  },

  {
    path: 'location',
    element: <Location />,
  },
  {
    path: 'popular',
    element: <Popular />,
  },
];
