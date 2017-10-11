import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get addToCartButton(): ElementFinder {
    return $('#add_to_cart > button');
  }
  
  public goToAddToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
