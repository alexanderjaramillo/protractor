import { $, ElementFinder, promise, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }
  
  public goToProceedCheckout(): promise.Promise<void> {
    browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 5000);    
    return this.proceedToCheckoutButton.click();
  }
}
