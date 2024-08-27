import { createBrowserRouter } from 'react-router-dom';

import {
  AUTH_ROUTES,
  HOME_ROUTES,
  COMMUNITY_ROUTES,
  TOUR_COURSE_ROUTES,
  MY_PAGE_ROUTES,
} from './path';

import Layout from '@components/layouts/layout';
import Home from '@pages/home/home/Home';
import Notification from '@pages/Notification';

export const routes = createBrowserRouter([
  ...AUTH_ROUTES,
  {
    path: '/',
    element: <Layout />,
    children: [
      ...HOME_ROUTES,
      ...COMMUNITY_ROUTES,
      ...TOUR_COURSE_ROUTES,
      ...MY_PAGE_ROUTES,
      { path: 'notification', element: <Notification /> },
    ],
  },
]);
