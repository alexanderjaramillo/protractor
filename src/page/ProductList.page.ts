import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtButton(): ElementFinder {
    return $('.product_img_link');
  }

  public goToTShirtDetail(): promise.Promise<void> {
    return this.tShirtButton.click();
  }
}
