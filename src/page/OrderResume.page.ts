import { $, ElementFinder, promise } from 'protractor';

export class OrderSummaryPage {
  private get confirmOrderButton(): ElementFinder {
    return $('#cart_navigation > button > span');
  }
  
  public goToConfirmOrder(): promise.Promise<void> {
    return this.confirmOrderButton.click();
  }
}
