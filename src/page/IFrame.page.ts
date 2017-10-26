import { browser, $ } from 'protractor';

export class IFramePage {
  public async modifyIframeHeight(height : number) : Promise<void> {
    await browser.executeScript(
      `document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public async getIframeHeight() : Promise<number> {
    return Number(await $('#IF1').getAttribute('height'));
  }
}
