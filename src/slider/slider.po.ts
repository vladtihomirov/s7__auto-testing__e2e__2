import {Locator, Page} from "@playwright/test";
import {BasePO} from "../base/base.po";

export class SliderPO extends BasePO {
  private readonly valueInput: Locator;
  private readonly rangeInput: Locator;

  constructor(page: Page) {
    super(page);
    this.valueInput = page.locator('#sliderValue');
    this.rangeInput = page.locator('input[type="range"]');
  }

  async setValue(value: number): Promise<void> {
    await this.rangeInput.click({ force: true });
    const current = await this.getRangeValue();
    const delta = value - current;
    const key = delta > 0 ? 'ArrowRight' : 'ArrowLeft';
    for (let i = 0; i < Math.abs(delta); i++) {
      await this.rangeInput.press(key);
    }
  }

  async getValue(): Promise<string> {
    return await this.valueInput.inputValue();
  }

  private async getRangeValue(): Promise<number> {
    const val = await this.rangeInput.getAttribute('value');
    return +(val ?? '0');
  }
}


