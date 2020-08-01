import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage{
  private iframe1: ElementFinder;

  constructor () {
    this.iframe1 = $('#frame1');
  }
  public async getIframeHeight(): Promise<number> {
    return Number((await this.iframe1.getAttribute('height')).slice(0, 3));
  }
  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
