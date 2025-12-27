import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class TextBoxPO extends BasePO {
  private readonly fullNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly currentAddressTextarea: Locator;
  private readonly permanentAddressTextarea: Locator;
  private readonly submitButton: Locator;

  private readonly outputContainer: Locator;
  private readonly outputName: Locator;
  private readonly outputEmail: Locator;
  private readonly outputCurrentAddress: Locator;
  private readonly outputPermanentAddress: Locator;

  constructor(page: Page) {
    super(page);

    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressTextarea = page.locator('#currentAddress');
    this.permanentAddressTextarea = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');

    this.outputContainer = page.locator('#output');
    this.outputName = page.locator('#output #name');
    this.outputEmail = page.locator('#output #email');
    this.outputCurrentAddress = page.locator('#output #currentAddress');
    this.outputPermanentAddress = page.locator('#output #permanentAddress');
  }

  async fillFullName(fullName: string): Promise<void> {
    await this.fullNameInput.fill(fullName);
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillCurrentAddress(address: string): Promise<void> {
    await this.currentAddressTextarea.fill(address);
  }

  async fillPermanentAddress(address: string): Promise<void> {
    await this.permanentAddressTextarea.fill(address);
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async isOutputVisible(): Promise<boolean> {
    return await this.outputContainer.isVisible();
  }

  async isOutputNameVisible(): Promise<boolean> {
    return await this.outputName.isVisible();
  }

  async isEmailInvalid(): Promise<boolean> {
    const classList = await this.emailInput.getAttribute('class');
    const invalidByValidity = await this.emailInput.evaluate((el) => el.validity?.valid === false);
    return (classList?.includes('field-error') ?? false) || invalidByValidity || false;
  }

  async isEmailValid(): Promise<boolean> {
    const classList = await this.emailInput.getAttribute('class');
    const validByValidity = await this.emailInput.evaluate((el) => el.validity?.valid === true);
    return (!(classList?.includes('field-error')) && validByValidity) || false;
  }

  async getOutputName(): Promise<string | null> {
    return await this.outputName.textContent();
  }

  async getOutputEmail(): Promise<string | null> {
    return await this.outputEmail.textContent();
  }

  async getOutputCurrentAddress(): Promise<string | null> {
    return await this.outputCurrentAddress.textContent();
  }

  async getOutputPermanentAddress(): Promise<string | null> {
    return await this.outputPermanentAddress.textContent();
  }
}


