import AuthContainer from '@components/auth/common/auth-container';

import { signUpInitialState } from '@utils/reducer/auth-reducer';

import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';
import FunnelButton from '@components/auth/common/funnel-button';

type EmailProps = {
  setStep: () => void;
};

export default function Email(props: EmailProps) {
  const { setStep } = props;

  return (
    <AuthContainer type='funnel'>
      <FunnelHeader heading='이메일을 입력해주세요.' />

      <FunnelInput type='duplication' />

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </AuthContainer>
  );
}
