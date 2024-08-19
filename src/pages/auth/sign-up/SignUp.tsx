import { useEffect, useReducer, useState } from 'react';
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom';
import { useFunnel } from '@xionhub/funnel-react-router-dom-adapter';

import { basicFunnelOptions } from '@utils/funnel-option';
import { signUpInitialState, signUpReducer } from '@utils/reducer/auth-reducer';

import Email from '@components/auth/sign-up/email';
import AuthHeader from '@components/auth/common/auth-header';
import AuthContainer from '@components/auth/common/auth-container';
import { useFunnelDefaultStep } from '@xionhub/funnel-core';
import Password from '@components/auth/sign-up/password';
import Information from '@components/auth/sign-up/information';
import Terms from '@components/auth/sign-up/terms';
import Finish from '@components/auth/sign-up/finish';

type Step = 'email' | 'password' | 'information' | 'terms' | 'finish';

export default function SingUp() {
  const [Funnel, { createStep, step }] = useFunnel(basicFunnelOptions());
  const [progressWidth, setProgressWith] = useState<number>(25);
  const [customBack, setCustomBack] = useState<string>('');

  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();

  const [authState, dispatch] = useReducer(signUpReducer, signUpInitialState);

  useEffect(() => {
    switch (step) {
      case 'email':
        setProgressWith(20);
        setCustomBack('/login');
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

  function stepHandler(step: Step) {
    navigate(createStep(step, {}));
  }

  return (
    <AuthContainer type='default'>
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
