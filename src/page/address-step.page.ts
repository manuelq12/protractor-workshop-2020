import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('#center_column > form > p > button > span');
  }

  public async clickCheckOut(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
