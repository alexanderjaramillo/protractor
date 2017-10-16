import { $, ElementFinder, by } from 'protractor';

interface productInformation {
  firstName : string;
  lastName : string;
  sex : string;
  experience : number;
  profession : string[];
  tools : string[];
  continent : string;
  commands : string[];
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
    return $('#continents').element(by.cssContainingText('option', continent));
  }

  private commandsOption(command : string): ElementFinder {
    return $('#selenium_commands').element(by.cssContainingText('option', command));
  }

  private get buttonButton(): ElementFinder {
    return $('#submit');
  }

  private get pageTitle(): ElementFinder {
    return $('.content h1');
  }
  
  public async getTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  public async fillForm(data : productInformation): Promise<void> {
    await this.firstName.sendKeys(data.firstName);
    await this.lastName.sendKeys(data.lastName);
    await this.sexRadio(data.sex).click();
    await this.experienceYearsRadio(data.experience).click();

    for (const profession of data.profession) {
      await this.professionCheck(profession).click();
    }

    for (const tool of data.tools) {
      await this.toolCheck(tool).click();
    }

    await this.continentOption(data.continent).click();

    for (const command of data.commands) {
      await this.commandsOption(command).click();
    }

    await this.buttonButton.click();
  }
}
