import { promise, browser } from 'protractor';

export class IFramePage {
  public modifyIframeHeight(height : number) : promise.Promise<void> {
    // tslint:disable-next-line:max-line-length
    return browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public async getIframeHeight() : Promise<number> {
    // tslint:disable-next-line:max-line-length
    return Number(await browser.executeScript(`document.querySelector("#IF1").getAttribute('height');`));
  }
}
