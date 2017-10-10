import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get addToCartButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }
  public goToAddToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
