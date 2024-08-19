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

type Step = 'email' | 'password' | 'information' | 'finish';

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
        setProgressWith(25);
        setCustomBack('/login');
        break;
      case 'password':
        setProgressWith(50);
        setCustomBack('');
        break;
      case 'information':
        setProgressWith(75);
        setCustomBack('');
        break;
      case 'finish':
        setProgressWith(100);
        setCustomBack('');
        break;
    }
  }, [step]);

  useFunnelDefaultStep(step, () => {
    navigate(createStep('email'), { replace: true });
  });

  function stepHandler(step: Step) {
    navigate(createStep(step, {}));
  }

  return (
    <AuthContainer>
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
          <Information setStep={() => stepHandler('information')} />
        </Funnel.Step>
      </Funnel>
    </AuthContainer>
  );
}
