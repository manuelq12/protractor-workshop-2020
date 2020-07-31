import { $, ElementFinder, browser, ExpectedConditions, by, element } from 'protractor';
import { UserInformation } from '../userInformation';

export class PersonalInformationPage {
  private titleText:ElementFinder;
  private nameTextField: ElementFinder;
  private lastNameTextField: ElementFinder;
  private genderRadioBox: ElementFinder;
  private experienceRadioBox: ElementFinder;
  private professionCheckbox: ElementFinder;
  private toolsCheckbox: ElementFinder;
  private continentSelect:ElementFinder;
  private commandsSelect:ElementFinder;
  private submitBtn:ElementFinder;

  constructor () {
    this.titleText = element(by.cssContainingText('h1', 'Selenium - Automation Practice Form'));
    this.nameTextField = $('input[name="firstname"]');
    this.lastNameTextField = $('input[name="lastname"]');
    this.submitBtn = $('button[name="submit"]');
  }

  public async getTitleText() {
    await browser.wait(ExpectedConditions.visibilityOf(this.titleText), 3000);
    return this.titleText.getText();
  }

  public async fillForm(personalInformation: UserInformation): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.nameTextField), 3000);
    await this.nameTextField.sendKeys(personalInformation.firstName);
    await this.lastNameTextField.sendKeys(personalInformation.lastName);

    this.genderRadioBox = $(`input[name="sex"][value="${personalInformation.sex}"]`);
    await this.genderRadioBox.click();

    this.experienceRadioBox = $(`input[name="exp"][value="${personalInformation.experience}"]`);
    await this.experienceRadioBox.click();

    personalInformation.profession.forEach(async (prof) => {
      this.professionCheckbox = $(`input[name="profession"][value="${prof}"]`);
      await this.professionCheckbox.click();
    });

    personalInformation.tools.forEach(async (tool) => {
      this.toolsCheckbox = $(`input[name="tool"][value="${tool}"]`);
      await this.toolsCheckbox.click();
    });

    this.continentSelect = $('select[name="continents"]')
      .element(by.cssContainingText('option', personalInformation.continent));
    await this.continentSelect.click();

    personalInformation.commands.forEach(async(command) => {
      this.commandsSelect = $('select[name="selenium_commands"]')
        .element(by.cssContainingText('option', command));
      await this.commandsSelect.click();
    });

  }

  public async submitForm(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.submitBtn), 3000);
    await this.submitBtn.click();
    await browser.wait(ExpectedConditions.alertIsPresent(), 3000);
    await browser.switchTo().alert().accept();
  }
}
