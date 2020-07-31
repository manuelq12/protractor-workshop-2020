import { $$, browser, ExpectedConditions, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  public async selectProduct(productName: string): Promise<void> {
    await browser.wait(ExpectedConditions.
      elementToBeClickable(this.findByProduct(productName)),
                       4000);
    await this.findByProduct(productName).$('a.ajax_add_to_cart_button').click();
  }
  private findByProduct (productName:string) {
    return this.products.filter(product => product.$('.product-name')
    .getAttribute('title').then((result) => {
      return result === productName;
    })).first();
  }
}
