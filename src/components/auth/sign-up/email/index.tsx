import { useState } from 'react';
import { useRecoilState } from 'recoil';

import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';
import FunnelButton from '@components/auth/common/funnel-button';
import ValidationMessage from '@components/auth/common/validation-message';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';
import { type Response } from '@utils/types/response';

import { signUpEmailState } from '@store/sign-up';
import { getValueHandler } from '@components/auth/sign-up/utils/get-value';
import { END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import { useFetch } from '@hooks/useFetch';

type MessageType = 'success' | 'error' | 'null';

export default function Email(props: FunnelProps) {
  const { setStep } = props;

  const [email, setEmail] = useRecoilState(signUpEmailState);
  const [messageType, setMessageType] = useState<MessageType>('null');
  const [isNext, setIsNext] = useState<boolean>(true);

  const [fetchData, fetchHandler] = useFetch<
    { email: string },
    Response<string>
  >();

  async function duplicationCheckHandler() {
    const response = await fetchHandler({
      url: END_POINT_MEMBER + '/verify-email',
      method: 'post',
      data: { email },
    });

    if (response?.status === 200) {
      setIsNext(false);
      setMessageType('success');
    } else {
      setMessageType('error');
      setIsNext(true);
    }
  }

  const conditional = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const inputDisabled = !conditional.test(email) || !isNext;

  return (
    <>
      <FunnelHeader heading='이메일을 입력해주세요.' />

      <FunnelInput
        inputStyle='duplication'
        placeholder='이메일 주소'
        onChange={e => getValueHandler(e, setEmail)}
        onClick={duplicationCheckHandler}
        value={email}
        disabled={inputDisabled}
        isNext={isNext}
        buttonContentFalse='중복확인'
        buttonContentTrue='인증완료'
      />

      <section>
        {messageType === 'success' && (
          <ValidationMessage
            type='success'
            message='사용 가능한 이메일 주소입니다.'
          />
        )}
        {messageType === 'error' && (
          <ValidationMessage
            type='error'
            message='중복된 이메일 주소입니다. 다른 이메일 주소를 입력해 주세요.'
          />
        )}
      </section>

      <FunnelButton setStep={setStep} disabled={isNext}>
        다음단계
      </FunnelButton>
    </>
  );
}
