import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {TextBoxPO} from "./text-box.po";

const { Then } = createBdd(baseFixture);

Then(/^the output should be visible$/, async function({ page }) {
  const textBoxPage = new TextBoxPO(page);
  expect(await textBoxPage.isOutputVisible()).toBe(true);
});

Then(/^the output should not be visible$/, async function({ page }) {
  const textBoxPage = new TextBoxPO(page);
  expect(await textBoxPage.isOutputNameVisible()).toBe(false);
});

Then(/^the output (name|email|current address|permanent address) should contain "([^"]*)"$/, async function({ page }, fieldName: string, value: string) {
  const textBoxPage = new TextBoxPO(page);
  const normalizedFieldName = fieldName.toLowerCase().trim();

  switch (normalizedFieldName) {
    case 'name':
      expect(await textBoxPage.getOutputName()).toContain(value);
      break;
    case 'email':
      expect(await textBoxPage.getOutputEmail()).toContain(value);
      break;
    case 'current address':
      expect(await textBoxPage.getOutputCurrentAddress()).toContain(value);
      break;
    case 'permanent address':
      expect(await textBoxPage.getOutputPermanentAddress()).toContain(value);
      break;
    default:
      throw new Error(`Unknown output field: ${fieldName}`);
  }
});

Then(/^the email should be invalid$/, async function({ page }) {
  const textBoxPage = new TextBoxPO(page);
  expect(await textBoxPage.isEmailInvalid()).toBe(true);
});

Then(/^the email should be valid$/, async function({ page }) {
  const textBoxPage = new TextBoxPO(page);
  expect(await textBoxPage.isEmailValid()).toBe(true);
});


