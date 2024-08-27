export type FunnelProps = {
  setStep: () => void;
};

export type SignUpStep =
  | 'email'
  | 'password'
  | 'information'
  | 'terms'
  | 'finish';

export type RecoveryEmailStep = 'phone-number' | 'finish';

export type RecoveryPasswordStep = 'phone-number' | 'password' | 'finish';
