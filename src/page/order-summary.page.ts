import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private payByBankOption: ElementFinder;

  constructor () {
    this.payByBankOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async clickPayByBank(): Promise<void> {
    await this.payByBankOption.click();
  }
}
