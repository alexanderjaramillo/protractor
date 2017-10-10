import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('.cart_navigation span');
  }
  
  public goToProceedCheckout(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
