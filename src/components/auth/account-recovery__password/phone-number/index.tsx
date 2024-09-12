import FunnelButton from '@components/auth/common/funnel-button';
import FunnelInput from '@components/auth/common/funnel-input';
import { type FunnelProps } from '@utils/funnel/types/funnel-types';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { getValueHandler } from '@utils/helpers/auth/get-value';

import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import ValidationMessage from '@components/auth/common/validation-message';
import { findPasswordPhonNumberState } from '@store/find';

export default function PhoneNumber(props: FunnelProps) {
  const { setStep } = props;

  const [phoneNumber, setPhoneNumber] = useRecoilState(
    findPasswordPhonNumberState
  );

  const [phoneValidation, setPhoneValidation] = useState<boolean>(false);
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [isCertification, setIsCertification] = useState<boolean>(false);

  const [certification, setCertification] = useState<string>('');

  const fetchHandler = useFetch();

  const mobileRegex = /^01[016789]-\d{3,4}-\d{4}$/;
  const mobileRegexTest = mobileRegex.test(phoneNumber);

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
    } else {
      setIsCertification(false);
    }
    setIsCertification(true);
  }

  useEffect(() => {
    if (mobileRegexTest) {
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
        readOnly
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
      <FunnelButton setStep={setStep} disabled={phoneValidation}>
        다음 단계
      </FunnelButton>
      ;
    </>
  );
}
