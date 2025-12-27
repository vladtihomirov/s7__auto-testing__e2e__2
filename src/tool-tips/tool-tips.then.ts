import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {ToolTipsPO} from "./tool-tips.po";

const { Then } = createBdd(baseFixture);

Then(/^the tool tip for button should have id "([^"]*)"$/, async function({ page }, tooltipId: string) {
  const tt = new ToolTipsPO(page);
  await expect
    .poll(() => tt.getAriaDescribedByForButton(), { timeout: 3000 })
    .toBe(tooltipId);
});

Then(/^the tool tip for text field should have id "([^"]*)"$/, async function({ page }, tooltipId: string) {
  const tt = new ToolTipsPO(page);
  await expect
    .poll(() => tt.getAriaDescribedByForTextField(), { timeout: 3000 })
    .toBe(tooltipId);
});

Then(/^the tool tip for link "([^"]*)" should have id "([^"]*)"$/, async function({ page }, linkText: string, tooltipId: string) {
  const tt = new ToolTipsPO(page);
  await expect
    .poll(() => tt.getAriaDescribedByForLink(linkText), { timeout: 3000 })
    .toBe(tooltipId);
});

Then(/^the tooltip "([^"]*)" should be visible$/, async function({ page }, tooltipId: string) {
  const tt = new ToolTipsPO(page);
  expect(await tt.isTooltipVisibleById(tooltipId)).toBe(true);
});


