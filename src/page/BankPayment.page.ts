import { $, ElementFinder, promise } from 'protractor';

export class OrderConfirmationPage {
  private get confirmationText(): ElementFinder {
    return $('#center_column > div > p > strong');
  }
  
  public getOrderText(): promise.Promise<string> {
    return this.confirmationText.getText();
  }
}
