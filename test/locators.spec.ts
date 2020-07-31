import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { UserInformation } from '../src/userInformation';

describe('Given Practice Automation website', () => {
  beforeAll(async() => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });
  describe('When the user needs to fill a form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const personInformation:UserInformation = {
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
        'WebElement Commands']};
    beforeAll(async() => {
      await personalInformationPage.fillForm(personInformation);
      await personalInformationPage.submitForm();
    });
    it('Then the form must have been successfully filled and other pop-us must have been closed',
       async () => {
         await expect(personalInformationPage.getTitleText())
          .toBe('Selenium - Automation Practice Form');
       });
  });
});
