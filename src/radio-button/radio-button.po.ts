import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

type RadioOption = 'Yes' | 'Impressive' | 'No';

export class RadioButtonPO extends BasePO {
  private readonly idsByOption: Record<RadioOption, string> = {
    Yes: 'yesRadio',
    Impressive: 'impressiveRadio',
    No: 'noRadio',
  };

  constructor(page: Page) {
    super(page);
  }

  async select(option: RadioOption): Promise<void> {
    const id = this.idsByOption[option];
    const label = this.page.locator(`label[for="${id}"]`);
    await label.click();
  }

  async getResultSelection(): Promise<string | null> {
    // DemoQA shows selected value inside span.text-success
    const selected = this.page.locator('.text-success');
    return await selected.textContent();
  }
}


