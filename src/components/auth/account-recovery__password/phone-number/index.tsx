import FunnelButton from '@components/auth/common/funnel-button';
import FunnelInput from '@components/auth/common/funnel-input';
import { type FunnelProps } from '@utils/funnel/types/funnel-types';

export default function PhoneNumber(props: FunnelProps) {
  const { setStep } = props;

  return (
    <>
      <FunnelInput inputStyle='certification' />
      <FunnelButton setStep={setStep}>다음 단계</FunnelButton>
    </>
  );
}
