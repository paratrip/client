import AuthContainer from '@components/auth/common/auth-container';
import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';

import { signUpInitialState } from '@utils/reducer/auth-reducer';

export default function Information(props: FunnelProps) {
  const { setStep } = props;

  return (
    <>
      <FunnelHeader heading='정보를 입력해주세요.' />
      <section>
        <FunnelInput inputStyle='duplication' />
        <FunnelInput inputStyle='certification' />
      </section>

      <section>
        <FunnelInput inputStyle='duplication' placeholder='아이디(닉네임)' />
        <FunnelInput
          inputStyle='duplication'
          placeholder='생년월일(8자리 입력해주세요. ex.1990101)'
        />
      </section>

      <FunnelButton setStep={setStep}>다음단계</FunnelButton>
    </>
  );
}
