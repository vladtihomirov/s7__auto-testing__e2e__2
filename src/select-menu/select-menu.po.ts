import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class SelectMenuPO extends BasePO {
  private readonly selectValueInput: Locator;
  private readonly selectValueContainer: Locator;
  private readonly selectOneInput: Locator;
  private readonly selectOneContainer: Locator;
  private readonly oldStyleSelect: Locator;
  private readonly multiSelectInput: Locator;
  private readonly multiSelectControl: Locator;

  constructor(page: Page) {
    super(page);
    this.selectValueInput = page.locator('#react-select-2-input');
    this.selectValueContainer = page.locator('#withOptGroup');
    this.selectOneInput = page.locator('#react-select-3-input');
    this.selectOneContainer = page.locator('#selectOne');
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.multiSelectInput = page.locator('#react-select-4-input');
    this.multiSelectControl = page
      .locator('text=Multiselect drop down')
      .locator('xpath=ancestor::div[contains(@class,"col-md-6")][1]')
      .locator('xpath=.//div[contains(@class,"control")]');
  }

  async selectValue(optionText: string): Promise<void> {
    await this.selectValueInput.fill(optionText);
    await this.selectValueInput.press('Enter');
  }

  async getSelectedValueText(): Promise<string | null> {
    return await this.selectValueContainer.locator('[class*="singleValue"]').textContent();
  }

  async selectOne(optionText: string): Promise<void> {
    await this.selectOneInput.fill(optionText);
    await this.selectOneInput.press('Enter');
  }

  async getSelectedOneText(): Promise<string | null> {
    return await this.selectOneContainer.locator('[class*="singleValue"]').textContent();
  }

  async selectOldStyle(optionLabel: string): Promise<void> {
    await this.oldStyleSelect.selectOption({ label: optionLabel });
  }

  async getOldStyleSelectedLabel(): Promise<string | null> {
    const value = await this.oldStyleSelect.inputValue();
    const option = this.oldStyleSelect.locator(`option[value="${value}"]`);
    return await option.textContent();
  }

  async addMultiSelect(optionText: string): Promise<void> {
    await this.multiSelectControl.locator('[class*="placeholder"]').click({ force: true });
    await this.multiSelectInput.fill(optionText);
    await this.multiSelectInput.press('Enter');
  }

  async getMultiSelectedValues(): Promise<string[]> {
    const pills = this.multiSelectControl.locator('[class*="multiValue"] div');
    const count = await pills.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await pills.nth(i).textContent();
      if (text) values.push(text.trim());
    }
    return values;
  }

  async isMultiSelected(value: string): Promise<boolean> {
    const token = this.page.locator('[class*="multiValue"]').filter({ hasText: value }).first();
    return await token.isVisible();
  }
}


