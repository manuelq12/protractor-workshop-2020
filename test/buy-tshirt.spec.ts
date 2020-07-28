import { browser } from 'protractor';
import { MenuContentPage, ProductList, ProductAddedModal,
  SummaryStep, SignInStep, AddressStep,
  ShippingStep, OrderSummary, BankPayment, PaymentStep} from '../src/page';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productList: ProductList = new ProductList();
  const productAddedModal: ProductAddedModal = new ProductAddedModal();
  const summaryStep: SummaryStep = new SummaryStep();
  const signInStep: SignInStep = new SignInStep();
  const addressStep: AddressStep = new AddressStep();
  const shippingStep: ShippingStep = new ShippingStep();
  const orderSummary: OrderSummary = new OrderSummary();
  const bankPayment: BankPayment = new BankPayment();
  const paymentStep: PaymentStep = new PaymentStep();
  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productList.addToCart();
    await(browser.sleep(3000));
    await productAddedModal.clickModalBtn();
    await(browser.sleep(3000));
    await summaryStep.clickCheckOut();
    await(browser.sleep(3000));
    await signInStep.performLogin();
    await(browser.sleep(3000));
    await addressStep.clickCheckOut();
    await(browser.sleep(3000));
    await shippingStep.acceptTermsOfService();
    await(browser.sleep(3000));
    await shippingStep.clickCheckOut();
    await(browser.sleep(3000));
    await orderSummary.clickPayByBank();
    await(browser.sleep(3000));
    await bankPayment.clickConfirmOrder();
    await(browser.sleep(3000));
    await paymentStep.validateCompleteOrder();
  });
});
