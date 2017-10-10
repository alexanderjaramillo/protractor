import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get payButton(): ElementFinder {
    return $('.bankwire');
  }
  
  public goToPayment(): promise.Promise<void> {
    return this.payButton.click();
  }
}
