import {BasePO} from "../base/base.po";
import {Locator, Page} from "@playwright/test";

export class FormPO extends BasePO {
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly userEmailInput: Locator;
  private readonly maleRadioButton: Locator;
  private readonly femaleRadioButton: Locator;
  private readonly otherRadioButton: Locator;
  private readonly userNumberInput: Locator;
  private readonly dateOfBirthInput: Locator;
  private readonly subjectsInput: Locator;
  private readonly sportsCheckbox: Locator;
  private readonly readingCheckbox: Locator;
  private readonly musicCheckbox: Locator;
  private readonly uploadPictureInput: Locator;
  private readonly currentAddressTextarea: Locator;
  private readonly stateSelect: Locator;
  private readonly citySelect: Locator;
  private readonly submitButton: Locator;
  private readonly genderFor: Record<'Male' | 'Female' | 'Other', string>;
  private readonly hobbyFor: Record<'Sports' | 'Reading' | 'Music', string>;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.userEmailInput = page.locator('#userEmail');
    this.maleRadioButton = page.locator('#gender-radio-1');
    this.femaleRadioButton = page.locator('#gender-radio-2');
    this.otherRadioButton = page.locator('#gender-radio-3');
    this.userNumberInput = page.locator('#userNumber');
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.subjectsInput = page.locator('#subjectsInput');
    this.sportsCheckbox = page.locator('#hobbies-checkbox-1');
    this.readingCheckbox = page.locator('#hobbies-checkbox-2');
    this.musicCheckbox = page.locator('#hobbies-checkbox-3');
    this.uploadPictureInput = page.locator('#uploadPicture');
    this.currentAddressTextarea = page.locator('#currentAddress');
    this.stateSelect = page.locator('#react-select-3-input');
    this.citySelect = page.locator('#react-select-4-input');
    this.submitButton = page.locator('#submit');
    this.genderFor = {
      Male: 'gender-radio-1',
      Female: 'gender-radio-2',
      Other: 'gender-radio-3',
    };
    this.hobbyFor = {
      Sports: 'hobbies-checkbox-1',
      Reading: 'hobbies-checkbox-2',
      Music: 'hobbies-checkbox-3',
    };
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.waitFor({ state: 'visible' });
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.lastNameInput.waitFor({ state: 'visible' });
    await this.lastNameInput.fill(lastName);
  }

  async fillEmail(email: string): Promise<void> {
    await this.userEmailInput.waitFor({ state: 'visible' });
    await this.userEmailInput.fill(email);
  }

  async selectGender(gender: 'Male' | 'Female' | 'Other'): Promise<void> {
    await this.page.locator(`label[for="${this.genderFor[gender]}"]`).click();
  }

  async fillMobileNumber(mobileNumber: string): Promise<void> {
    await this.userNumberInput.waitFor({ state: 'visible' });
    await this.userNumberInput.fill(mobileNumber);
  }

  async fillDateOfBirth(date: string): Promise<void> {
    await this.dateOfBirthInput.waitFor({ state: 'visible' });
    await this.dateOfBirthInput.fill(date);
    await this.dateOfBirthInput.press("Enter")
  }

  async fillSubjects(subject: string): Promise<void> {
    await this.subjectsInput.waitFor({ state: 'visible' });
    await this.subjectsInput.fill(subject);
  }

  async selectHobby(hobby: 'Sports' | 'Reading' | 'Music'): Promise<void> {
    const input = this.page.locator(`#${this.hobbyFor[hobby]}`);
    if (!(await input.isChecked())) {
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(50);
      await this.page.locator(`label[for="${this.hobbyFor[hobby]}"]`).click();
    }
  }

  async deselectHobby(hobby: 'Sports' | 'Reading' | 'Music'): Promise<void> {
    const input = this.page.locator(`#${this.hobbyFor[hobby]}`);
    if (await input.isChecked()) {
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(50);
      await this.page.locator(`label[for="${this.hobbyFor[hobby]}"]`).click();
    }
  }

  async uploadPicture(filePath: string): Promise<void> {
    await this.uploadPictureInput.setInputFiles(filePath);
  }

  async fillCurrentAddress(address: string): Promise<void> {
    await this.currentAddressTextarea.waitFor({ state: 'visible' });
    await this.currentAddressTextarea.fill(address);
  }

  async selectState(state: string): Promise<void> {
    await this.stateSelect.fill(state);
    await this.stateSelect.press('Enter');
  }

  async selectCity(city: string): Promise<void> {
    await this.citySelect.fill(city);
    await this.citySelect.press('Enter');
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async getFirstName(): Promise<string | null> {
    return await this.firstNameInput.inputValue();
  }

  async getLastName(): Promise<string | null> {
    return await this.lastNameInput.inputValue();
  }

  async getEmail(): Promise<string | null> {
    return await this.userEmailInput.inputValue();
  }

  async getMobileNumber(): Promise<string | null> {
    return await this.userNumberInput.inputValue();
  }

  async getDateOfBirth(): Promise<string | null> {
    return await this.dateOfBirthInput.inputValue();
  }

  async getSubjects(): Promise<string | null> {
    return await this.subjectsInput.inputValue();
  }

  async getCurrentAddress(): Promise<string | null> {
    return await this.currentAddressTextarea.inputValue();
  }

  async isGenderSelected(gender: 'Male' | 'Female' | 'Other'): Promise<boolean> {
    const genderLocator: Record<'Male' | 'Female' | 'Other', Locator> = {
      Male: this.maleRadioButton,
      Female: this.femaleRadioButton,
      Other: this.otherRadioButton,
    };
    return await genderLocator[gender].isChecked();
  }

  async isHobbySelected(hobby: 'Sports' | 'Reading' | 'Music'): Promise<boolean> {
    const hobbyLocator: Record<'Sports' | 'Reading' | 'Music', Locator> = {
      Sports: this.sportsCheckbox,
      Reading: this.readingCheckbox,
      Music: this.musicCheckbox,
    };
    return await hobbyLocator[hobby].isChecked();
  }

  async isFieldValid(fieldId: string): Promise<boolean> {
    const field = this.page.locator(`#${fieldId}`);
    const classList = await field.getAttribute('class');
    const validByValidity = await field.evaluate((el) => el.validity?.valid === true);
    return classList?.includes('is-valid') || validByValidity || false;
  }

  async isFieldInvalid(fieldId: string): Promise<boolean> {
    const field = this.page.locator(`#${fieldId}`);
    const classList = await field.getAttribute('class');
    const invalidByValidity = await field.evaluate((el) => el.validity?.valid === false);
    return classList?.includes('is-invalid') || invalidByValidity || false;
  }

  async getSubmissionModal(): Promise<Locator> {
    return this.page.locator('.modal-content');
  }

  async isSubmissionModalVisible(): Promise<boolean> {
    const modal = await this.getSubmissionModal();
    return await modal.isVisible();
  }

  async getSubmissionModalText(): Promise<string | null> {
    const modal = await this.getSubmissionModal();
    return await modal.textContent();
  }
}
