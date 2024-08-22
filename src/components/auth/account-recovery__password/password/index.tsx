import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';
import { type FunnelProps } from '@utils/funnel/types/funnel-types';

export default function Password(props: FunnelProps) {
  const { setStep } = props;

  return (
    <>
      <FunnelHeader heading='비밀번호를 재설정합니다.' />
      <FunnelInput inputStyle='default' />

      <FunnelButton setStep={setStep}>다음 단계</FunnelButton>
    </>
  );
}
