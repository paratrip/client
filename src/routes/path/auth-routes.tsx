import Login from '@pages/auth/login/Login';
import EmailLogin from '@pages/auth/email-login/EmailLogin';

export const AUTH_ROUTES = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/email',
    element: <EmailLogin />,
  },

  {
    path: 'signup',
  },
  {
    path: 'forgot-password',
  },
  {
    path: 'forgot-id',
  },
];
