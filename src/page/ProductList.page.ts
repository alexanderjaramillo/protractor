import { ElementFinder, promise, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return $$('.product-container');
  }
  
  public selectProduct(productName: string): promise.Promise<void> {
    return this.findByProduct(productName).$('img').click();
  }
  
  private findByProduct(product: string): ElementFinder {
    return this.productContainerList
      .filter((item: ElementFinder) =>
        item.$('.product-name').getText()
          .then((text: string) => text.includes(product))).first();
  }
}
