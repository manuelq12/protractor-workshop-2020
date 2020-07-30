import { $, ElementFinder } from 'protractor';

export class  PaymentStepPage {
  private payByBankOption: ElementFinder;

  constructor () {
    this.payByBankOption = $('.bankwire');
  }

  public async clickPayByBank(): Promise<void> {
    await this.payByBankOption.click();
  }
}
