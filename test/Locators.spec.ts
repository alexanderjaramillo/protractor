import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Fill Personal Information' , () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
  
  describe('Open Browser', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/');  
    });
    
    describe('Process of filling fields', () => {
      beforeAll(async () => {
        await personalInformationPage.fillForm({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands']
        });
      });
        
      it('should show the title of the page', async () => {
        await expect(personalInformationPage.getTitle())
          .toBe('Practice Automation Form');  
      });
    });
  });
});
