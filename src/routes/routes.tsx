import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  AUTH_ROUTES,
  HOME_ROUTES,
  COMMUNITY_ROUTES,
  TOUR_COURSE_ROUTES,
  MY_PAGE_ROUTES,
  TERMS_ROUTES,
} from './path';

import Layout from '@components/layouts/layout';
import Notification from '@pages/Notification';

export const routes = createBrowserRouter([
  ...AUTH_ROUTES,
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to='/home' replace /> },
      ...HOME_ROUTES,
      ...COMMUNITY_ROUTES,
      ...TOUR_COURSE_ROUTES,
      ...MY_PAGE_ROUTES,
      ...TERMS_ROUTES,
      { path: 'notification', element: <Notification /> },
    ],
  },
]);
