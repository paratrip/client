import { funnelOptions } from '@xionhub/funnel-core';

export const basicFunnelOptions = () =>
  funnelOptions({
    steps: ['email', 'password', 'information', 'terms', 'finish'] as const,
    funnelId: '0',
    defaultPrefix: '/sign-up',
  });
