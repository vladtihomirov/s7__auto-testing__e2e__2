import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import { AlertsPO } from './alerts.po';

const { When } = createBdd(baseFixture)

When('I click the simple alert button', async function({ page }) {
  const alertPage = new AlertsPO(page);
  page.once('dialog', async dialog => {
    this.dialog = dialog;
    await dialog.accept();
  });
  await alertPage.clickAlertButton();
});

When('I click the timer alert button', async function({ page }) {
  const alertPage = new AlertsPO(page);
  page.once('dialog', async dialog => {
    this.dialog = dialog;
    await dialog.accept();
  });
  await alertPage.clickTimerAlertButton();
});

When(/^I click the confirm alert button with (accept|deny)$/, async function({ page }, action: 'accept'|'deny') {
  const alertPage = new AlertsPO(page);
  page.once('dialog', async dialog => {
    this.dialog = dialog;
    if (action === 'deny') {
      await dialog.dismiss();
    } else {
      await dialog.accept();
    }
  });
  await alertPage.clickConfirmButton();
});

When(/^I click the prompt alert button, write "([^"]*)" and accept$/, async function({ page }, text: string) {
  const alertPage = new AlertsPO(page);
  page.once('dialog', async dialog => {
    this.dialog = dialog;
    await dialog.accept(text);
  });
  await alertPage.clickPromptButton();
});
