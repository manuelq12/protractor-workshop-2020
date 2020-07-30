import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('[name="processAddress"]');
  }

  public async clickCheckOut(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
