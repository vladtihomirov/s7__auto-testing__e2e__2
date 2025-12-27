import {Locator, Page} from '@playwright/test';
import {BasePO} from "../base/base.po";

export class AlertsPO extends BasePO {
  private readonly alertButton: Locator;
  private readonly timerAlertButton: Locator;
  private readonly confirmButton: Locator;
  private readonly confirmResult: Locator;
  private readonly promptButton: Locator;
  private readonly promptResult: Locator;

  constructor(page: Page) {
    super(page);

    this.alertButton = page.locator('#alertButton');
    this.timerAlertButton = page.locator('#timerAlertButton');
    this.confirmButton = page.locator('#confirmButton');
    this.confirmResult = page.locator('#confirmResult');
    this.promptButton = page.locator('#promtButton');
    this.promptResult = page.locator('#promptResult');
  }

  async clickAlertButton(): Promise<void> {
    await this.alertButton.click();
  }

  async clickTimerAlertButton(): Promise<void> {
    await this.timerAlertButton.click();
  }

  async clickConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }

  async clickPromptButton(): Promise<void> {
    await this.promptButton.click();
  }

  async getConfirmResult(): Promise<string | null> {
    return await this.confirmResult.textContent();
  }

  async getPromptResult(): Promise<string | null> {
    return await this.promptResult.textContent();
  }
}
