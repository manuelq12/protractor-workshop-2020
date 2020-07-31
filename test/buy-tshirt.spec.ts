import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage,
  ShippingStepPage, OrderSummaryPage, BankPaymentPage, PaymentStepPage} from '../src/page';

describe('Given a shopping website', () => {
  beforeAll(async() => {
    await browser.get('http://automationpractice.com/');
  });
  describe('When the user wants to buy a t-shirt', () => {
    beforeAll(async() => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productAddedModalPage.clickModalBtn();
      await summaryStepPage.clickCheckOut();
    });

    describe('Then it must login into the website', () => {
      beforeAll(async() => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.performLogin();
      });

      describe('Then it must select the default address', () => {
        beforeAll(async() => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.clickCheckOut();
        });

        describe('And it must pay via bank wire', () => {
          beforeAll(async() => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            await shippingStepPage.acceptTermsOfService();
            await shippingStepPage.clickCheckOut();
            await paymentStepPage.clickPayByBank();
            await bankPaymentPage.clickConfirmOrder();
          });
          it('then the t-shirt order must be completed', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getOrderStatus())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
