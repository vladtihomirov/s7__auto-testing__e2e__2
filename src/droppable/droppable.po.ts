import {Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class DroppablePO extends BasePO {
  constructor(page: Page) {
    super(page);
  }

  async dragAndDrop(): Promise<void> {
    await this.page.dragAndDrop('#simpleDropContainer #draggable', '#simpleDropContainer #droppable');
  }

  async getDropText(): Promise<string | null> {
    return await this.page.locator('#simpleDropContainer #droppable p').first().textContent();
  }
}


