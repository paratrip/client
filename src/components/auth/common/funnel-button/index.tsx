import Button from '@components/ui/button';

import styles from './funnel-button.module.css';

type FunnelButtonProps = {
  setStep: () => void;
  children: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FunnelButton(props: FunnelButtonProps) {
  const { setStep, children, disabled, ...rest } = props;

  return (
    <Button
      className={
        !disabled ? styles['funnel-button'] : styles['funnel-disabled']
      }
      onClick={setStep}
      {...rest}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
