import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('.cart_navigation span');
  }

  public async clickCheckOut(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
