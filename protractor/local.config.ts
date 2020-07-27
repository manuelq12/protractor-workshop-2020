import { Config, browser } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
      browser.ignoreSynchronization = true;
  }
};
