import AuthContainer from '@components/auth/common/auth-container';

import { signUpInitialState } from '@utils/reducer/auth-reducer';

import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';
import FunnelButton from '@components/auth/common/funnel-button';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';

export default function Email(props: FunnelProps) {
  const { setStep } = props;

  return (
    <>
      <FunnelHeader heading='이메일을 입력해주세요.' />

      <FunnelInput inputStyle='duplication' placeholder='이메일 주소' />

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </>
  );
}
