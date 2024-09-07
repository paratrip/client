import React, { useReducer } from 'react';
import TermsItem from '@components/auth/account-recovery__email/terms/terms-item';
import FunnelButton from '@components/auth/common/funnel-button';
import FunnelHeader from '@components/auth/common/funnel-header';

import { type FunnelProps } from '@utils/funnel/types/funnel-types';
import {
  termsReducer,
  INITIAL_TERMS,
  TermsState,
  TermsAction,
} from '@utils/reducer/terms-reducer';

import styles from './terms.module.css';

const TERMS = [
  {
    id: 'all',
    heading: '모두 동의하기',
  },
  {
    id: 'service',
    heading: '(필수) 서비스 이용 약관',
    link: '/terms/service',
  },
  {
    id: 'privacy',
    heading: '(필수) 개인정보 처리 방침',
    link: '/terms/privacy',
  },
  {
    id: 'location',
    heading: '(필수) 위치 기반 서비스 이용약관',
    link: '/terms/location',
  },
];

export default function Terms(props: FunnelProps) {
  const { setStep } = props;
  const [state, dispatch] = useReducer<React.Reducer<TermsState, TermsAction>>(
    termsReducer,
    INITIAL_TERMS
  );

  const handleTermToggle = (id: keyof TermsState) => {
    if (id === 'all') {
      dispatch({ type: 'TOGGLE_ALL', payload: !state.all });
    } else {
      dispatch({ type: 'TOGGLE_TERM', payload: id });
    }
  };

  const isAllChecked = state.service && state.privacy && state.location;

  return (
    <>
      <FunnelHeader heading='서비스 이용을 위한 약관에 동의해주세요.' />

      <ul className={styles.ul}>
        {TERMS.map(item => (
          <TermsItem
            key={item.id}
            heading={item.heading}
            to={item.link}
            checked={
              item.id === 'all'
                ? isAllChecked
                : state[item.id as keyof TermsState]
            }
            onChange={() => handleTermToggle(item.id as keyof TermsState)}
          />
        ))}
      </ul>

      <FunnelButton setStep={setStep} disabled={!isAllChecked}>
        다음단계
      </FunnelButton>
    </>
  );
}
