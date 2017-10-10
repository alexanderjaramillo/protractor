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
  
  it('then should be bought a t-shirt' , async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToTShirtDetail();
    await productDetailPage.goToAddToCart();
    await productAddedModalPage.goToProceedCheckout();
    await summaryStepPage.goToProceedCheckout();
    await signInStepPage.goToSignIn();
    await addressStepPage.goToProceedCheckout();
    await shippingStepPage.goToCheckout();
    await paymentStepPage.goToPayment();
    await orderSummaryPage.goToConfirmOrder();
    await expect(orderConfirmationPage.getOrderText())
      .toBe('Your order on My Store is complete.');
  });
});
