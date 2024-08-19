import { funnelOptions } from '@xionhub/funnel-core';

export const signUpFunnelOptions = () =>
  funnelOptions({
    steps: ['email', 'password', 'information', 'terms', 'finish'] as const,
    funnelId: '0',
    defaultPrefix: '/sign-up',
  });

export const recoveryEmailFunnelOption = () =>
  funnelOptions({
    steps: ['phone-number', 'finish'],
    funnelId: '',
    defaultPrefix: '/account-recovery/email',
  });
