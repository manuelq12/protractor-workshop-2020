import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a frame website', () => {
  beforeAll(async() => {
    await browser.get('https://demoqa.com/frames');
  });
  describe('Then we change the frame height', async() => {
    const iFramePage = new IFramePage();
    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(120);
    });
    it('After we confirm the frame height changed', async () => {
      await expect(await iFramePage.getIframeHeight())
      .toEqual(120);
    });
  });
});
