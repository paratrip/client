import Button from '@components/ui/button';

import styles from './funnel-input.module.css';

type FunnelInputProps = {
  inputStyle: 'default' | 'duplication' | 'certification';
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  isNext?: boolean;
  buttonContentTrue?: string;
  buttonContentFalse?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FunnelInput(props: FunnelInputProps) {
  const {
    inputStyle = 'default',
    onClick,
    disabled,
    buttonContentTrue,
    buttonContentFalse,
    isNext,
    ...rest
  } = props;

  if (inputStyle === 'duplication' || inputStyle === 'certification') {
    return (
      <div className={styles['funnel-input-container']}>
        <input
          {...rest}
          className={
            isNext
              ? styles['container__duplication-input__default']
              : styles['container__duplication-input']
          }
        />
        <Button
          className={
            disabled ? styles.container__disabled : styles.container__button
          }
          onClick={onClick}
          disabled={disabled}
        >
          {disabled ? buttonContentTrue : buttonContentFalse}
        </Button>
      </div>
    );
  }

  return (
    <div className={styles['funnel-input-container']}>
      <input {...rest} className={styles['container__default-input']} />
    </div>
  );
}
