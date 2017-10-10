import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get emailField(): ElementFinder {
    return $('#email');
  }
  private get passField(): ElementFinder {
    return $('#passwd');
  }
  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }
  public goToSignIn(): promise.Promise<void> {
    this.emailField.sendKeys('aperdomobo@gmail.com');
    this.emailField.sendKeys('WorkshopProtractor');
    return this.signInButton.click();
  }
}
