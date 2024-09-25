import FunnelButton from '@components/auth/common/funnel-button';
import FunnelInput from '@components/auth/common/funnel-input';
import { type FunnelProps } from '@utils/funnel/types/funnel-types';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { getValueHandler } from '@utils/helpers/auth/get-value';

import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import ValidationMessage from '@components/auth/common/validation-message';
import { findPasswordPhonNumberState } from '@store/find';

const mobileRegex = /^01[016789]-\d{3,4}-\d{4}$/;

export default function PhoneNumber(props: FunnelProps) {
  const { setStep } = props;

  // 전화번호 값
  const [phoneNumber, setPhoneNumber] = useRecoilState(
    findPasswordPhonNumberState
  );

  // 인증번호
  const [certificationNumber, setCertificationNumber] = useState<string>('');

  // 전화번호 유효성 검사
  const [phoneValidation, setPhoneValidation] = useState<boolean>(false);

  // 메세지 발송
  const [isMessage, setIsMessage] = useState<boolean>(false);

  // 인증번호 true or false
  const [isCertification, setIsCertification] = useState<boolean>(true);
  const [isCertificationNumber, setIsCertificationNumber] =
    useState<boolean>(true);

  const [isVerifying, setIsVerifying] = useState(false);

  const fetchHandler = useFetch();

  const mobileRegexTest = mobileRegex.test(phoneNumber);

  useEffect(() => {
    if (mobileRegexTest) {
      setPhoneValidation(false);
    } else {
      setPhoneValidation(true);
    }
  }, [phoneNumber]);

  async function sendMessageHandler() {
    if (isVerifying) return;

    setIsVerifying(true);

    try {
      const response = await axios.post(END_POINT_MEMBER + '/verify-phone', {
        phoneNumber,
      });

      console.log('인증 성공:', response.status);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 409) {
          setIsCertification(true);
          await fetchHandler({
            url: END_POINT + '/sms-certification/send',
            method: 'post',
            data: { phoneNumber },
          });
          setIsMessage(true);
        } else {
          console.log('다른 에러 발생:', error.message);
        }
      } else {
        console.error('알 수 없는 에러 발생:', error);
      }
    } finally {
      setIsVerifying(false);
    }
  }

  async function checkCertificationHandler() {
    setPhoneValidation(false);

    const response = await axios.post(
      END_POINT + '/sms-certification/confirm',
      {
        phone: phoneNumber,
        certificationNumber,
      }
    );

    if (response.status === 200) {
      setIsCertification(false);
      setIsCertificationNumber(false);
    } else {
      setIsCertification(true);
    }
  }

  return (
    <>
      <FunnelInput
        inputStyle='certification'
        placeholder='전화번호 (ex. 010-8715-1472)'
        onChange={e => getValueHandler(e, setPhoneNumber)}
        onClick={sendMessageHandler}
        disabled={phoneValidation}
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
            onChange={e => getValueHandler(e, setCertificationNumber)}
            onClick={checkCertificationHandler}
            disabled={certificationNumber.length !== 4}
            value={certificationNumber}
            buttonContentFalse='인증요청'
            buttonContentTrue='요청완료'
          />
          {isCertification && (
            <ValidationMessage
              type='error'
              message='올바르지 않은 인증번호입니다.'
            />
          )}
        </>
      )}
      <FunnelButton setStep={setStep} disabled={isCertificationNumber}>
        다음 단계
      </FunnelButton>
    </>
  );
}
