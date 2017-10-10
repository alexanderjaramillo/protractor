import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get emailField(): ElementFinder {
    return $('#email');
  }

  private get passwordField(): ElementFinder {
    return $('#passwd');
  }

  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }
  
  public async goToSignIn(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.signInButton.click();
  }
}
