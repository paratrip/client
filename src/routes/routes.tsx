import { createBrowserRouter } from 'react-router-dom';

import { AUTH_ROUTES, COMMUNITY_ROUTES, TOUR_COURSE_ROUTES } from './path';

import Layout from '@components/layouts/layout';
import Home from '@pages/home/Home';

export const routes = createBrowserRouter([
  ...AUTH_ROUTES,
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...COMMUNITY_ROUTES,
      ...TOUR_COURSE_ROUTES,
    ],
  },
]);
