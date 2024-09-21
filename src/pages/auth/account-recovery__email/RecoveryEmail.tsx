import { useFunnel } from '@xionhub/funnel-react-router-dom-adapter';
import { useFunnelDefaultStep } from '@xionhub/funnel-core';
import { useNavigate } from 'react-router-dom';

import AuthContainer from '@components/auth/common/auth-container';
import AuthHeader from '@components/auth/common/auth-header';

import { recoveryEmailFunnelOption } from '@utils/funnel/option';
import PhoneNumber from '@components/auth/account-recovery__email/phone-number';
import Finish from '@components/auth/account-recovery__email/finish';
import { type RecoveryEmailStep } from '@utils/funnel/types/funnel-types';

export default function RecoveryEmail() {
  const [Funnel, { createStep, step }] = useFunnel(recoveryEmailFunnelOption());

  const navigate = useNavigate();

  useFunnelDefaultStep(step, () => {
    navigate(createStep('phone-number'), { replace: true });
  });

  function stepHandler(step: RecoveryEmailStep) {
    navigate(createStep(step, {}));
  }

  return (
    <AuthContainer type='funnel'>
      <AuthHeader title='이메일 찾기' />

      <Funnel>
        {/* <Funnel.Step name='phone-number'>
          <PhoneNumber setStep={() => stepHandler('finish')} />
        </Funnel.Step> */}
        <Funnel.Step name='finish'>
          <Finish />
        </Funnel.Step>
      </Funnel>
    </AuthContainer>
  );
}
