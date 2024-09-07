import { createBrowserRouter } from 'react-router-dom';

import {
  AUTH_ROUTES,
  HOME_ROUTES,
  COMMUNITY_ROUTES,
  TOUR_COURSE_ROUTES,
  MY_PAGE_ROUTES,
  TERMS_ROUTES,
} from './path';

import Layout from '@components/layouts/layout';

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
      ...TERMS_ROUTES,
      { path: 'notification', element: <Notification /> },
    ],
  },
]);
