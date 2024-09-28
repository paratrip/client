import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';
import { type FunnelProps } from '@utils/funnel/types/funnel-types';

import { useFetch } from '@hooks/useFetch';
import { useRecoilValue } from 'recoil';
import { findPasswordPhonNumberState } from '@store/find';
import { useState } from 'react';

import { getValueHandler } from '@utils/helpers/get-value';

import { passwordRegex } from '@utils/validation';
import { END_POINT_MEMBER } from '@utils/endpoint/endpoint';

export default function Password(props: FunnelProps) {
  const { setStep } = props;

  const phoneNumber = useRecoilValue<string>(findPasswordPhonNumberState);
  const [newPassword, setNewPassword] = useState<string>('');

  const fetchHandler = useFetch();

  async function submitHandler() {
    await fetchHandler({
      url: END_POINT_MEMBER + '/reset-password',
      method: 'post',
      data: {
        phoneNumber,
        password: newPassword,
      },
    });
    setStep();
  }

  return (
    <>
      <FunnelHeader heading='비밀번호를 재설정합니다.' />
      <FunnelInput
        inputStyle='default'
        type='password'
        onChange={e => getValueHandler(e, setNewPassword)}
      />

      <FunnelButton
        setStep={submitHandler}
        disabled={!passwordRegex.test(newPassword)}
      >
        다음 단계
      </FunnelButton>
    </>
  );
}
