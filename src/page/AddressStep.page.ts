import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('.cart_navigation > button');
  }
  
  public goToProceedCheckout(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
