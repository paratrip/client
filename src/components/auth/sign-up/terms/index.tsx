import AuthContainer from '@components/auth/common/auth-container';
import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';

type PasswordProps = {
  setStep: () => void;
};

export default function Terms(props: PasswordProps) {
  const { setStep } = props;

  return (
    <AuthContainer type='funnel'>
      <FunnelHeader heading='서비스 이용을 위한 약관에 동의해주세요.' />

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </AuthContainer>
  );
}
