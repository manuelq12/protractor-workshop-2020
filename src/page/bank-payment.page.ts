import { $, ElementFinder } from 'protractor';

export class BankPayment {
  private confirmOrderBtn: ElementFinder;

  constructor () {
    this.confirmOrderBtn = $('#cart_navigation > button > span');
  }

  public async clickConfirmOrder(): Promise<void> {
    await this.confirmOrderBtn.click();
  }
}
