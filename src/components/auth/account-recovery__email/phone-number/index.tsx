import FunnelInput from '@components/auth/common/funnel-input';
import FunnelHeader from '../../common/funnel-header';
import FunnelButton from '../../common/funnel-button';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';

export default function PhoneNumber(props: FunnelProps) {
  const { setStep } = props;

  return (
    <>
      <FunnelHeader heading='이메일 찾기' />

      <FunnelInput
        inputStyle='duplication'
        placeholder='전화번호(ex. 010-1111-2222)'
      />

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </>
  );
}
