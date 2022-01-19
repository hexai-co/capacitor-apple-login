import { WebPlugin } from '@capacitor/core';

import type { AppleLoginPlugin } from './definitions';

export class AppleLoginWeb extends WebPlugin implements AppleLoginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
