import Button from '@components/ui/button';

import styles from './funnel-input.module.css';

type FunnelInputProps = {
  inputStyle: 'default' | 'duplication' | 'certification';
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FunnelInput(props: FunnelInputProps) {
  const { inputStyle = 'default', ...rest } = props;

  if (inputStyle === 'duplication') {
    return (
      <div className={styles['funnel-input-container']}>
        <input {...rest} className={styles['container__duplication-input']} />
        <Button className={styles.container__button}>중복확인</Button>
      </div>
    );
  }

  if (inputStyle === 'certification') {
    return (
      <div className={styles['funnel-input-container']}>
        <input {...rest} className={styles['container__certification-input']} />
        <Button className={styles.container__button}>인증요청</Button>
      </div>
    );
  }

  return (
    <div className={styles['funnel-input-container']}>
      <input {...rest} className={styles['container__default-input']} />
    </div>
  );
}
