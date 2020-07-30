import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage,
  ShippingStepPage, OrderSummaryPage, BankPaymentPage, PaymentStepPage} from '../src/page';

describe('This must open the shopping website in the browser', () => {
  beforeAll(async() => {
    await browser.get('http://automationpractice.com/');
  });
  describe('Then it must do the process when i want to buy a t-shirt', () => {
    beforeAll(async() => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.addToCart();
      await productAddedModalPage.clickModalBtn();
      await summaryStepPage.clickCheckOut();
    });

    describe('Then it must login into the website', () => {
      beforeAll(async() => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.performLogin();
      });

      describe('After that, it must select the default address', () => {
        beforeAll(async() => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.clickCheckOut();
        });

        describe('Finally, it must pay via bank wire', () => {
          beforeAll(async() => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            await shippingStepPage.acceptTermsOfService();
            await shippingStepPage.clickCheckOut();
            await paymentStepPage.clickPayByBank();
            await bankPaymentPage.clickConfirmOrder();
          });
          it('then should be bought a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getOrderStatus())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
