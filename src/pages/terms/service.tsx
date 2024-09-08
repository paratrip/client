import { Suspense } from 'react';

import AuthHeader from '@components/auth/common/auth-header';

export default function TermsService() {
  return (
    <Suspense>
      <AuthHeader title='이용약관' />
    </Suspense>
  );
}
