import { browser, ElementFinder, element, by } from 'protractor';

export class IFramePage {
  private get iFrame1(): ElementFinder {
    return element(by.id('IF1'));
  }
  
  public async modifyIframeHeight(height : number) : Promise<void> {
    await browser.executeScript(
      `document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public async getIframeHeight() : Promise<number> {
    return Number(await this.iFrame1.getAttribute('height'));
  }

  private get pageTitle(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }

  public async getTitle() : Promise<string> {
    return await this.pageTitle.getText();
  }

  public async switchIframe1() : Promise<void> {
    await browser.switchTo().frame(this.iFrame1.getWebElement());
  }

  public async switchMain() : Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
