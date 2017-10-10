import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('.standard-checkout');
  }
  
  public goToProceedCheckout(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
