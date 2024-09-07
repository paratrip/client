import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';
import InformationPhone from './information-phone';

import { getValueHandler } from '@utils/helpers/auth/get-value';
import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';

import {
  signUpBornState,
  signUpEmailState,
  signUpGenderState,
  signUpNicknameState,
  signUpPasswordState,
  signUpPhonNumberState,
} from '@store/sign-up';
import styles from './information.module.css';
import Select from '@components/ui/select/select';
import InformationNickname from './information-nickname';
import InformationBorn from './information-born';
import InformationGender from './information-gender';
import { useNavigate } from 'react-router-dom';

export default function Information(props: FunnelProps) {
  const { setStep } = props;

  const [fetchData, fetchHandler] = useFetch();

  const navigate = useNavigate();

  const [isCertification, setIsCertification] = useState<boolean>(false);
  const [isNickName, setIsNickName] = useState<boolean>(false);
  const [isBorn, setIsBorn] = useState<boolean>(false);

  const email = useRecoilValue(signUpEmailState);
  const password = useRecoilValue(signUpPasswordState);
  const nickname = useRecoilValue(signUpNicknameState);
  const phoneNumber = useRecoilValue(signUpPhonNumberState);
  const born = useRecoilValue(signUpBornState);
  const gender = useRecoilValue(signUpGenderState);

  async function submitHandler() {
    try {
      await fetchHandler({
        url: END_POINT_MEMBER,
        method: 'post',
        data: {
          email,
          password,
          userId: nickname,
          phoneNumber,
          birth: born,
          gender,
        },
      });

      setStep();
    } catch (error) {
      navigate('/sign-up/error');
    }
  }

  return (
    <>
      <FunnelHeader heading='정보를 입력해주세요.' />

      <InformationPhone
        isCertification={isCertification}
        onIsCertification={setIsCertification}
      />

      <section className={styles.section}>
        {isCertification && (
          <InformationNickname onIsNickname={setIsNickName} />
        )}

        {isNickName && <InformationBorn onIsBorn={setIsBorn} />}

        {isBorn && <InformationGender />}
      </section>

      <FunnelButton disabled={!gender} setStep={submitHandler}>
        다음단계
      </FunnelButton>
    </>
  );
}
