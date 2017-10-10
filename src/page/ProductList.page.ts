import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtImg(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }
  public goToTShirtDetail(): promise.Promise<void> {
    return this.tShirtImg.click();
  }
}
