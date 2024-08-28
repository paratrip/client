import { useRecoilState } from 'recoil';

import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';
import { signUpPasswordState } from '@store/sign-up';

import { getValueHandler } from '../utils/get-value';
import ValidationMessage from '@components/auth/common/validation-message';

export default function Password(props: FunnelProps) {
  const { setStep } = props;

  const [password, setPassword] = useRecoilState(signUpPasswordState);

  const conditional =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  return (
    <>
      <FunnelHeader heading='비밀번호를 입력해주세요.' />

      <FunnelInput
        inputStyle='default'
        placeholder='비밀번호'
        type='password'
        disabled={!conditional.test(password)}
        value={password}
        onChange={e => getValueHandler(e, setPassword)}
      />

      {conditional.test(password) && (
        <ValidationMessage
          type='success'
          message='사용 가능한 비밀번호 입니다.'
        />
      )}

      {password.length !== 0 && !conditional.test(password) && (
        <ValidationMessage
          type='error'
          message='조건에 맞는 비밀번호를 입력해 주세요.'
        />
      )}

      <ValidationMessage
        type='info'
        message='영문 + 숫자 + 특수문자를 포함하여 8자리 이상 입력해 주세요.'
      />

      <FunnelButton setStep={setStep} disabled={!conditional.test(password)}>
        다음단계
      </FunnelButton>
    </>
  );
}
