import { useFunnel } from '@xionhub/funnel-react-router-dom-adapter';
import { useFunnelDefaultStep } from '@xionhub/funnel-core';
import { useNavigate } from 'react-router-dom';

import AuthContainer from '@components/auth/common/auth-container';
import AuthHeader from '@components/auth/common/auth-header';

import { recoveryPasswordFunnelOption } from '@utils/funnel/option';
import PhoneNumber from '@components/auth/account-recovery__password/phone-number';
import Password from '@components/auth/account-recovery__password/password';
import Finish from '@components/auth/account-recovery__password/finish';
import { type RecoveryPasswordStep } from '@utils/funnel/types/funnel-types';

export default function RecoveryPassword() {
  const [Funnel, { createStep, step }] = useFunnel(
    recoveryPasswordFunnelOption()
  );

  const navigate = useNavigate();

  useFunnelDefaultStep(step, () => {
    navigate(createStep('phone-number'), { replace: true });
  });

  function stepHandler(step: RecoveryPasswordStep) {
    navigate(createStep(step, {}));
  }

  return (
    <AuthContainer type='funnel'>
      <AuthHeader title='비밀번호 재설정' />

      <Funnel>
        <Funnel.Step name='phone-number'>
          <PhoneNumber setStep={() => stepHandler('password')} />
        </Funnel.Step>
        <Funnel.Step name='password'>
          <Password setStep={() => stepHandler('finish')} />
        </Funnel.Step>

        <Funnel.Step name='finish'>
          <Finish />
        </Funnel.Step>
      </Funnel>
    </AuthContainer>
  );
}
