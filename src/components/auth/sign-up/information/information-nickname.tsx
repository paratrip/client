import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { getValueHandler } from '@utils/helpers/auth/get-value';
import { signUpNicknameState } from '@store/sign-up';
import { useFetch } from '@hooks/useFetch';

import FunnelInput from '@components/auth/common/funnel-input';
import { type Response } from '@utils/types/response';
import { END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import ValidationMessage from '@components/auth/common/validation-message';

type InformationNickname = {
  onIsNickname: (parameter: boolean) => void;
};

export default function InformationNickname(props: InformationNickname) {
  const { onIsNickname } = props;

  const [nickname, setNickname] = useRecoilState<string>(signUpNicknameState);

  const [isClick, setIsClick] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<'true' | 'false' | 'null'>('null');

  const [fetchData, fetchHandler] = useFetch<
    { userId: string },
    Response<string>
  >();

  async function nicknameCheckHandler() {
    setIsClick(true);

    const response = await fetchHandler({
      url: END_POINT_MEMBER + '/verify-userId',
      method: 'post',
      data: { userId: nickname },
    });

    if (response.status === 200) {
      setIsValid('false');
      onIsNickname(true);
    } else {
      setIsClick(false);
      setIsValid('true');
    }
  }

  return (
    <>
      <FunnelInput
        inputStyle='certification'
        placeholder='아이디(닉네임)'
        value={nickname}
        onChange={e => getValueHandler(e, setNickname)}
        buttonContentFalse='인증요청'
        buttonContentTrue='요청완료'
        onClick={nicknameCheckHandler}
        disabled={isClick}
      />
      {isValid === 'true' && (
        <ValidationMessage
          type='error'
          message='중복된 아이디입니다. 다른 아이디를 입력해 주세요.'
        />
      )}

      {nickname.length !== 0 && isValid === 'false' && (
        <ValidationMessage type='success' message='사용 가능한 아이디입니다.' />
      )}
    </>
  );
}
