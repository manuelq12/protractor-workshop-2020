import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrderBtn: ElementFinder;

  constructor () {
    this.confirmOrderBtn = (element(by.partialButtonText('I confirm my order')));
  }

  public async clickConfirmOrder(): Promise<void> {
    await this.confirmOrderBtn.click();
  }
}
