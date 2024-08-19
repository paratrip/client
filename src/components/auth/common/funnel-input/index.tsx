import { useState } from 'react';

import Button from '@components/ui/button';
import AuthInput from '../auth-input';

import styles from './funnel-input.module.css';

type FunnelInputProps = {
  type: 'default' | 'duplication';
};

export default function FunnelInput(props: FunnelInputProps) {
  const { type = 'default' } = props;

  if (type === 'default') {
    return (
      <div className={styles['funnel-input-container']}>
        <AuthInput className={styles['container__default-input']} />
      </div>
    );
  }

  return (
    <div className={styles['funnel-input-container']}>
      <AuthInput className={styles['container__duplication-input']} />
      <Button className={styles.container__button}>중복확인</Button>
    </div>
  );
}
