import AuthContainer from '@components/auth/common/auth-container';
import AuthHeader from '@components/auth/common/auth-header';
import DuplicationInput from '@components/auth/common/funnel-input';
import Button from '@components/ui/button';

import { signUpInitialState } from '@utils/reducer/auth-reducer';

type InformationProps = {
  setStep: () => void;
};

export default function Information(props: InformationProps) {
  const { setStep } = props;

  return (
    <AuthContainer type='funnel'>
      <DuplicationInput type='duplication' />
      <Button onClick={setStep}>다음단계</Button>
    </AuthContainer>
  );
}
