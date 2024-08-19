import AuthContainer from '@components/auth/common/auth-container';
import AuthInput from '@components/auth/common/auth-input';
import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';
import Button from '@components/ui/button';

import { signUpInitialState } from '@utils/reducer/auth-reducer';

type PasswordProps = {
  setStep: () => void;
};

export default function Password(props: PasswordProps) {
  const { setStep } = props;

  return (
    <AuthContainer type='funnel'>
      <FunnelHeader heading='비밀번호를 입력해주세요.' />

      <FunnelInput type='default' />

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </AuthContainer>
  );
}
