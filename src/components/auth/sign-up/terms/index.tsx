import AuthContainer from '@components/auth/common/auth-container';
import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';

export default function Terms(props: FunnelProps) {
  const { setStep } = props;

  return (
    <>
      <FunnelHeader heading='서비스 이용을 위한 약관에 동의해주세요.' />

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </>
  );
}
