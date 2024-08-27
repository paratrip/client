import AuthHome from '@pages/auth/home/AuthHome';
import EmailLogin from '@pages/auth/login__email/EmailLogin';
import SignUp from '@pages/auth/sign-up/SignUp';
import AccountRecovery from '@pages/auth/account-recovery/AccountRecovery';
import RecoveryEmail from '@pages/auth/account-recovery__email/RecoveryEmail';
import RecoveryPassword from '@pages/auth/account-recovery__password/RecoveryPassword';

export const AUTH_ROUTES = [
  {
    path: '/auth',
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
];
