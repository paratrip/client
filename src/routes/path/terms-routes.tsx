import { lazy } from 'react';

const Service = lazy(() => import('@pages/terms/service'));
const Privacy = lazy(() => import('@pages/terms/privacy'));
const Location = lazy(() => import('@pages/terms/location'));

export const TERMS_ROUTES = [
  {
    path: 'terms',
    children: [
      { path: 'service', element: <Service /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'privacy', element: <Location /> },
    ],
  },
];
