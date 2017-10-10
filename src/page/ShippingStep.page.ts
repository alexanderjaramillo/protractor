import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get termsCheck(): ElementFinder {
    return $('#cgv');
  }

  private get proceedToCheckoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }
  
  public async goToCheckout(): Promise<void> {
    await this.termsCheck.click();
    await this.proceedToCheckoutButton.click();
  }
}
