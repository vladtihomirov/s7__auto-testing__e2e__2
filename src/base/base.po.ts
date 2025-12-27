import { Page } from '@playwright/test';

export class BasePO {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
