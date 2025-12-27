import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class ToolTipsPO extends BasePO {
  private readonly button: Locator;
  private readonly textField: Locator;

  constructor(page: Page) {
    super(page);
    this.button = page.locator('#toolTipButton');
    this.textField = page.locator('#toolTipTextField');
  }

  async hoverButton(): Promise<void> {
    await this.button.hover();
  }

  async hoverTextField(): Promise<void> {
    await this.textField.hover();
  }

  async hoverLinkByText(text: string): Promise<void> {
    await this.page.getByRole('link', { name: text }).hover();
  }

  async getAriaDescribedByForButton(): Promise<string | null> {
    return await this.button.getAttribute('aria-describedby');
  }

  async getAriaDescribedByForTextField(): Promise<string | null> {
    return await this.textField.getAttribute('aria-describedby');
  }

  async getAriaDescribedByForLink(text: string): Promise<string | null> {
    return await this.page.getByRole('link', { name: text }).getAttribute('aria-describedby');
  }

  async isTooltipVisibleById(tooltipId: string): Promise<boolean> {
    return await this.page.locator(`#${tooltipId}`).isVisible();
  }
}


