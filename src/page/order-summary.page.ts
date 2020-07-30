import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderStatus: ElementFinder;

  constructor () {
    this.orderStatus = $('.cheque-indent');
  }

  public async getOrderStatus(): Promise<String> {
    const title = await this.orderStatus.getText();
    return title;
  }
}
