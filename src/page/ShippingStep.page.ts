import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get termsCheck(): ElementFinder {
    return $('#cgv');
  }
  private get proceedToCheckoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }
  public goToCheckout(): promise.Promise<void> {
    this.termsCheck.click();
    return this.proceedToCheckoutButton.click();
  }
}
