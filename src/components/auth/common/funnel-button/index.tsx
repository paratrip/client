import Button from '@components/ui/button';

import styles from './funnel-button.module.css';

type FunnelButtonProps = {
  setStep: () => void;
  children: string;
};

export default function FunnelButton(props: FunnelButtonProps) {
  const { setStep, children } = props;

  return (
    <Button className={styles['funnel-button']} onClick={setStep}>
      {children}
    </Button>
  );
}
