import { $, ElementFinder, by, element, browser } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import { DownloadService } from '../service'; 
import * as remote from 'selenium-webdriver/remote';

interface productInformation {
  firstName : string;
  lastName : string;
  sex : string;
  experience : number;
  profession : string[];
  tools : string[];
  continent : string;
  commands : string[];
  file : string;
  downloadFile : boolean;
}

export class PersonalInformationPage {
  private get firstName(): ElementFinder {
    return $('[name="firstname"]');
  }

  private get lastName(): ElementFinder {
    return $('[name="lastname"]');
  }

  private sexRadio(sex : string): ElementFinder {
    return $(`[name="sex"][value="${sex}"]`);
  }

  private experienceYearsRadio(year : number): ElementFinder {
    return $(`[name="exp"][value="${year}"]`);
  }

  private professionCheck(profession : string): ElementFinder {
    return $(`[name="profession"][value="${profession}"]`);
  }

  private toolCheck(tool : string): ElementFinder {
    return $(`[name="tool"][value="${tool}"]`);
  }

  private continentOption(continent : string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
  }

  private commandsOption(command : string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', command));
  }

  private get inputFile(): ElementFinder {
    return element(by.id('photo'));
  }

  private get buttonButton(): ElementFinder {
    return element(by.id('submit'));
  }

  private get pageTitle(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }

  private get downloadLink(): ElementFinder {
    return element(by.linkText('Test File to Download'));
  }
  
  public async getTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  public async getFileName(): Promise<string> {
    const fullPath: string = await this.inputFile.getAttribute('value');
    return fullPath.split(/(\\|\/)/g).pop();
  }

  private async uploadFile(path: string): Promise<void> {
    const fullPath = resolve(process.cwd(), path);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.inputFile.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  private async download(): Promise<void> {
    const link = await this.downloadLink.getAttribute('href');
    const service = new DownloadService();
    await service.downloadFile(link, 'test-document.xlsx');
  }

  public async fillForm(data : productInformation): Promise<void> {
    await this.firstName.sendKeys(data.firstName);
    await this.lastName.sendKeys(data.lastName);
    await this.sexRadio(data.sex).click();
    await this.experienceYearsRadio(data.experience).click();

    for (const profession of data.profession) {
      await this.professionCheck(profession).click();
    }

    if (data.file) {
      await this.uploadFile(data.file);
    }

    if (data.downloadFile) {
      await this.download();
    }

    for (const tool of data.tools) {
      await this.toolCheck(tool).click();
    }

    await this.continentOption(data.continent).click();

    for (const command of data.commands) {
      await this.commandsOption(command).click();
    }
  }

  public async submit(data : productInformation): Promise<void> {
    await this.fillForm(data);
    await this.buttonButton.click();
  }
}
