import { registerPlugin } from '@capacitor/core';

import type { AppleLoginPlugin } from './definitions';

const AppleLogin = registerPlugin<AppleLoginPlugin>('AppleLogin', {
  web: () => import('./web').then(m => new m.AppleLoginWeb()),
});

export * from './definitions';
export { AppleLogin };
