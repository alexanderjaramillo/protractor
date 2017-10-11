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
  
  describe('Open Browser', () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');  
    });

    describe('Process of buying the tShirt', () => {
      beforeAll(async () => {
        await menuContentPage.goToTShirtMenu();
        await productListPage.goToTShirtDetail();
        await productDetailPage.goToAddToCart();
        await productAddedModalPage.goToProceedCheckout();
        await summaryStepPage.goToProceedCheckout();
      });

      describe('Login in the application', () => {
        beforeAll(async () => {
          await signInStepPage.goToSignIn();  
        });

        describe('Select Address by default', () => {
          beforeAll(async () => {
            await addressStepPage.goToProceedCheckout();
            await shippingStepPage.goToCheckout();    
          });

          describe('Verification of the buy', () => {
            beforeAll(async () => {
              await paymentStepPage.goToPayment();
              await orderSummaryPage.goToConfirmOrder();
            });
        
            it('should show the order message', async () => {
              await expect(orderConfirmationPage.getOrderText())
              .toBe('Your order on My Store is complete.');  
            });
          });
        });
      });
    });
  });  
});
