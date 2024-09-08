import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import FunnelInput from '@components/auth/common/funnel-input';

import { signUpPhonNumberState } from '@store/sign-up';

import { getValueHandler } from '../utils/get-value';

import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import ValidationMessage from '@components/auth/common/validation-message';

type InformationPhoneProps = {
  isCertification: boolean;
  onIsCertification: (parameter: boolean) => void;
};

export default function InformationPhone(props: InformationPhoneProps) {
  const { isCertification, onIsCertification } = props;

  const [phoneNumber, setPhoneNumber] = useRecoilState(signUpPhonNumberState);

  console.log(phoneNumber);

  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [phoneValidation, setPhoneValidation] = useState<boolean>(false);

  const [certification, setCertification] = useState<string>('');

  console.log(certification);

  const [fetchData, fetchHandler] = useFetch();

  async function getCertificationHandler() {
    setIsPhone(true);
    setPhoneValidation(true);

    await fetchHandler({
      url: END_POINT + '/sms-certification/send',
      method: 'post',
      data: { phoneNumber },
    });
  }

  async function certificationCheckHandler() {
    const response = await fetchHandler({
      url: END_POINT + '/sms-certification/confirm',
      method: 'post',
      data: {
        phone: phoneNumber,
        certificationNumber: certification,
      },
    });

    if (response.status === 200) {
      onIsCertification(true);
    } else {
      onIsCertification(false);
    }
  }
  return (
    <>
      <FunnelInput
        inputStyle='certification'
        placeholder='전화번호 (ex. 010-8715-1472)'
        onChange={e => getValueHandler(e, setPhoneNumber)}
        onClick={getCertificationHandler}
        disabled={phoneValidation}
        value={phoneNumber}
        buttonContentFalse='인증요청'
        buttonContentTrue='요청완료'
      />
      {isPhone && (
        <>
          <FunnelInput
            inputStyle='certification'
            placeholder='인증번호'
            type='number'
            onChange={e => getValueHandler(e, setCertification)}
            onClick={certificationCheckHandler}
            disabled={certification.length !== 4}
            value={certification}
            buttonContentFalse='인증요청'
            buttonContentTrue='요청완료'
          />
          {!isCertification && (
            <ValidationMessage
              type='error'
              message='올바르지 않은 인증번호입니다.'
            />
          )}
        </>
      )}
    </>
  );
}
