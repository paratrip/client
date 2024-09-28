import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@xionhub/funnel-react-router-dom-adapter';
import { useFunnelDefaultStep } from '@xionhub/funnel-core';

import { signUpFunnelOptions } from '@utils/funnel/option';

import Email from '@components/auth/sign-up/email';
import AuthHeader from '@components/auth/common/auth-header';
import AuthContainer from '@components/auth/common/auth-container';
import Password from '@components/auth/sign-up/password';
import Information from '@components/auth/sign-up/information/information';
import Terms from '@components/auth/sign-up/terms';
import Finish from '@components/auth/sign-up/finish';

import { type SignUpStep } from '@utils/funnel/types/funnel-types';

export default function SingUp() {
  const [Funnel, { createStep, step }] = useFunnel(signUpFunnelOptions());
  const [progressWidth, setProgressWith] = useState<number>(25);
  const [customBack, setCustomBack] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    switch (step) {
      case 'email':
        setProgressWith(20);
        setCustomBack('/');
        break;
      case 'password':
        setProgressWith(40);
        setCustomBack('');
        break;
      case 'information':
        setProgressWith(60);
        setCustomBack('');
        break;
      case 'terms':
        setProgressWith(80);
        setCustomBack('');
        break;
      case 'finish':
        setProgressWith(100);
        setCustomBack('');
    }
  }, [step]);

  useFunnelDefaultStep(step, () => {
    navigate(createStep('email'), { replace: true });
  });

  function stepHandler(step: SignUpStep) {
    navigate(createStep(step, {}));
  }

  return (
    <AuthContainer type='funnel'>
      <AuthHeader
        title='회원가입'
        type='progress'
        width={progressWidth}
        customBack={customBack}
      />

      <Funnel>
        <Funnel.Step name='email'>
          <Email setStep={() => stepHandler('password')} />
        </Funnel.Step>
        <Funnel.Step name='password'>
          <Password setStep={() => stepHandler('information')} />
        </Funnel.Step>
        <Funnel.Step name='information'>
          <Information setStep={() => stepHandler('terms')} />
        </Funnel.Step>
        <Funnel.Step name='terms'>
          <Terms setStep={() => stepHandler('finish')} />
        </Funnel.Step>
        <Funnel.Step name='finish'>
          <Finish />
        </Funnel.Step>
      </Funnel>
    </AuthContainer>
  );
}
