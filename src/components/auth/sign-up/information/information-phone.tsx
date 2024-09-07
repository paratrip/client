import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import FunnelInput from '@components/auth/common/funnel-input';

import { signUpPhonNumberState } from '@store/sign-up';

import { getValueHandler } from '../../../../utils/helpers/auth/get-value';

import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import ValidationMessage from '@components/auth/common/validation-message';

export const mobileRegex = /^01[016789]-\d{3,4}-\d{4}$/;

type InformationPhoneProps = {
  isCertification: boolean;
  onIsCertification: (parameter: boolean) => void;
};

export default function InformationPhone(props: InformationPhoneProps) {
  const { isCertification, onIsCertification } = props;

  const [phoneNumber, setPhoneNumber] = useRecoilState(signUpPhonNumberState);

  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [phoneValidation, setPhoneValidation] = useState<boolean>(true);

  const [certification, setCertification] = useState<string>('');

  const [fetchData, fetchHandler] = useFetch();

  const regexTest = mobileRegex.test(phoneNumber);

  async function getCertificationHandler() {
    setPhoneValidation(true);

    const response = await fetchHandler({
      url: END_POINT_MEMBER + '/verify-phone',
      method: 'post',
      data: { phoneNumber },
    });

    if (response.status === 200) {
      await fetchHandler({
        url: END_POINT + '/sms-certification/send',
        method: 'post',
        data: { phoneNumber },
      });
      setIsMessage(true);
      return;
    }

    setIsMessage(false);
    setPhoneValidation(false);
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

  useEffect(() => {
    if (regexTest) {
      setPhoneValidation(false);
    } else {
      setPhoneValidation(true);
    }
  }, [phoneNumber]);

  return (
    <>
      <FunnelInput
        inputStyle='certification'
        placeholder='전화번호 (ex. 010-8715-1472)'
        onChange={e => getValueHandler(e, setPhoneNumber)}
        onClick={getCertificationHandler}
        disabled={phoneValidation}
        inputDisabled={isCertification}
        value={phoneNumber}
        buttonContentFalse='인증요청'
        buttonContentTrue='요청완료'
      />
      {isMessage && (
        <>
          <FunnelInput
            inputStyle='certification'
            placeholder='인증번호'
            type='number'
            onChange={e => getValueHandler(e, setCertification)}
            onClick={certificationCheckHandler}
            disabled={isCertification}
            value={certification}
            inputDisabled={isCertification}
            buttonContentFalse='인증요청'
            buttonContentTrue='요청완료'
            maxLength={4}
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
