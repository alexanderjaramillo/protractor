import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('.button-medium');
  }
  
  public async goToProceedCheckout(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 
      5000
    );
    await this.proceedToCheckoutButton.click();
  }
}
