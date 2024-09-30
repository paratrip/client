import { Outlet } from 'react-router-dom';

import AuthHome from '@pages/auth/home/AuthHome';
import EmailLogin from '@pages/auth/login__email/EmailLogin';
import SignUp from '@pages/auth/sign-up/SignUp';
import AccountRecovery from '@pages/auth/account-recovery/AccountRecovery';
import RecoveryEmail from '@pages/auth/account-recovery__email/RecoveryEmail';
import RecoveryPassword from '@pages/auth/account-recovery__password/RecoveryPassword';
import SignUpError from '@components/auth/sign-up/error';
import KakaoLogin from '@pages/kakao-login/kakao-login';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return <Navigate to='/home' replace />;
  }

  return <Outlet />;
};

export const AUTH_ROUTES = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/kakao',
        element: <KakaoLogin />,
      },
      {
        path: '/',
        children: [
          {
            index: true,
            element: <AuthHome />,
          },
          {
            path: 'email',
            element: <EmailLogin />,
          },
        ],
      },

      {
        path: 'sign-up',
        element: <SignUp />,
      },

      {
        path: 'sign-up/error',
        element: <SignUpError />,
      },

      {
        path: 'account-recovery',
        children: [
          {
            index: true,
            element: <AccountRecovery />,
          },
          {
            path: 'email',
            element: <RecoveryEmail />,
          },
          {
            path: 'password',
            element: <RecoveryPassword />,
          },
        ],
      },
    ],
  },
];
