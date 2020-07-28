import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private orderStatus: ElementFinder;

  constructor () {
    this.orderStatus = $('#center_column > div > p > strong');
  }

  public async validateCompleteOrder(): Promise<void> {
    await expect(this.orderStatus.getText())
      .toBe('Your order on My Store is complete.');
  }
}
