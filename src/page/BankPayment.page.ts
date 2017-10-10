import { $, ElementFinder, promise } from 'protractor';

export class OrderConfirmationPage {
  private get confirmationText(): ElementFinder {
    return $('.cheque-indent');
  }
  
  public getOrderText(): promise.Promise<string> {
    return this.confirmationText.getText();
  }
}
