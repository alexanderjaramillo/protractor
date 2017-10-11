import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private get payButton(): ElementFinder {
    return $('.bankwire');
  }
  
  public async goToPayment(): Promise<void> {
    await this.payButton.click();
  }
}
