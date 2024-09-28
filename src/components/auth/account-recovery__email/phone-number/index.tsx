import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import axios from 'axios';

import FunnelInput from '@components/auth/common/funnel-input';

import { getValueHandler } from '@utils/helpers/get-value';

import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';
import ValidationMessage from '@components/auth/common/validation-message';
import { findEmailPhonNumberState, getFindEmailState } from '@store/find';

import { mobileRegex } from '@components/auth/sign-up/information/information-phone';
import FunnelButton from '@components/auth/common/funnel-button';

type InformationPhoneProps = {
  setStep: () => void;
};

export default function InformationPhone(props: InformationPhoneProps) {
  const { setStep } = props;

  // 전화번호
  const [phoneNumber, setPhoneNumber] = useRecoilState(
    findEmailPhonNumberState
  );

  // 이메일
  const [_findEmail, setFindEmail] = useRecoilState(getFindEmailState);

  // 유효성검사
  const [phoneValidation, setPhoneValidation] = useState<boolean>(false);

  const [isMessage, setIsMessage] = useState<boolean>(false);

  // 인증번호
  const [certificationNumber, setCertificationNumber] = useState<string>('');
  const [isCertificationNumber, setIsCertificationNumber] =
    useState<boolean>(true);

  // 인증번호 발송 여부
  const [isCertification, setIsCertification] = useState<boolean>(true);

  const [isVerifying, setIsVerifying] = useState(false);

  const fetchHandler = useFetch<
    { phoneNumber: string; certificationNumber?: string },
    { email: string }
  >();

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
      const findEmailResponse = await fetchHandler({
        url: END_POINT_MEMBER + '/find-email',
        method: 'post',
        data: {
          phoneNumber,
        },
      });

      setFindEmail(findEmailResponse.data.email);
      setIsCertificationNumber(false);
    }
  }

  return (
    <>
      <FunnelInput
        inputStyle='certification'
        placeholder='전화번호 (ex. 010-8715-1472)'
        onChange={e => getValueHandler(e, setPhoneNumber)}
        onClick={sendMessageHandler}
        disabled={phoneValidation || isMessage}
        inputDisabled={isMessage}
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
            disabled={certificationNumber.length !== 4 && isCertificationNumber}
            value={certificationNumber}
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
      <FunnelButton setStep={setStep} disabled={isCertificationNumber}>
        다음 단계
      </FunnelButton>
    </>
  );
}
