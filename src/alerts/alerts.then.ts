import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {AlertsPO} from "./alerts.po";

const { Then } = createBdd(baseFixture);

Then(/^I should see an alert with text "([^"]*)"$/, async function ({ page }, text: string) {
  await expect
    .poll(() => (this.dialog ? this.dialog.message() : undefined), { timeout: 7000 })
    .toBe(text);
  this.dialog = null;
});

Then(/^I should not see an alert$/, async function ({ page }) {
  expect(this.dialog).toBeUndefined();
});

Then(/^Confirmation message should have text "([^"]*)"$/, async function ({ page }, text: string) {
  const alertPO = new AlertsPO(page);
  expect(await alertPO.getConfirmResult()).toBe(text);
});

Then(/^Prompt message should have text "([^"]*)"$/, async function ({ page }, text: string) {
  const alertPO = new AlertsPO(page);
  expect(await alertPO.getPromptResult()).toBe(text);
});
