import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';
import FunnelInput from '@components/auth/common/funnel-input';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';
import InformationPhone from './information-phone';

import { getValueHandler } from '../utils/get-value';
import { useFetch } from '@hooks/useFetch';
import { END_POINT, END_POINT_MEMBER } from '@utils/endpoint/endpoint';

import {
  signUpBornState,
  signUpGenderState,
  signUpNicknameState,
} from '@store/sign-up';
import styles from './information.module.css';
import Select from '@components/ui/select/select';
import InformationNickname from './information-nickname';
import InformationBorn from './information-born';
import InformationGender from './information-gender';

export default function Information(props: FunnelProps) {
  const { setStep } = props;

  const [isCertification, setIsCertification] = useState<boolean>(false);
  const [isNickName, setIsNickName] = useState<boolean>(false);
  const [isBorn, setIsBorn] = useState<boolean>(false);

  const gender = useRecoilValue(signUpGenderState);

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

      <FunnelButton disabled={!gender} setStep={setStep}>
        다음단계
      </FunnelButton>
    </>
  );
}
