import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class DatePickerPO extends BasePO {
  private readonly dateInput: Locator;

  constructor(page: Page) {
    super(page);
    this.dateInput = page.locator('#datePickerMonthYearInput');
  }

  async setDate(date: string): Promise<void> {
    await this.dateInput.fill('');
    await this.dateInput.fill(date);
    await this.dateInput.press('Enter');
  }

  async getDate(): Promise<string> {
    return await this.dateInput.inputValue();
  }
}


