import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class CheckboxPO extends BasePO {
  private readonly expandAllBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.expandAllBtn = page.locator('button[title="Expand all"], button[aria-label="Expand all"]');
  }

  async expandAll(): Promise<void> {
    if (await this.expandAllBtn.isVisible()) {
      await this.expandAllBtn.click();
    }
  }

  private getLabelLocator(label: string): Locator {
    return this.page.locator('.rct-node label').filter({ hasText: label }).first();
  }

  async selectCheckbox(label: string): Promise<void> {
    const labelLocator = this.getLabelLocator(label);
    await labelLocator.click();
  }

  async isCheckboxChecked(label: string): Promise<boolean> {
    const labelLocator = this.getLabelLocator(label);
    const icon = labelLocator.locator('xpath=.//span[contains(@class,"rct-checkbox")]//*[contains(@class,"rct-icon")]');
    const cls = await icon.getAttribute('class');
    return !!cls && cls.includes('rct-icon-check');
  }
}


