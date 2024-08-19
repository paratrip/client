import Login from '@pages/auth/login/Login';
import EmailLogin from '@pages/auth/email-login/EmailLogin';
import SignUp from '@pages/auth/sign-up/SignUp';

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
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'forgot-password',
  },
  {
    path: 'forgot-id',
  },
];
