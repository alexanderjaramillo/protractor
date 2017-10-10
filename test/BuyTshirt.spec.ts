import { browser } from 'protractor';
import { 
  MenuContentPage,
  ProductListPage,
  ProductDetailPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  OrderSummaryPage,
  OrderConfirmationPage } from '../src/page';

describe('Buy a t-shirt' , () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const orderConfirmationPage: OrderConfirmationPage = new OrderConfirmationPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt' , async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(5000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productListPage.goToTShirtDetail();
    await (browser.sleep(3000));
    await productDetailPage.goToAddToCart();
    await (browser.sleep(5000));
    await productAddedModalPage.goToProceedCheckout();
    await (browser.sleep(3000));
    await summaryStepPage.goToProceedCheckout();
    await (browser.sleep(3000));
    await signInStepPage.goToSignIn();
    await (browser.sleep(4000));
    await addressStepPage.goToProceedCheckout();
    await (browser.sleep(3000));
    await shippingStepPage.goToCheckout();
    await (browser.sleep(3000));
    await paymentStepPage.goToPayment();
    await (browser.sleep(3000));
    await orderSummaryPage.goToConfirmOrder();
    await (browser.sleep(3000));
    await expect(orderConfirmationPage.getOrderText())
      .toBe('Your order on My Store is complete.');
  });
});
