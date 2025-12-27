import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {TextBoxPO} from "./text-box.po";

const { When } = createBdd(baseFixture);

When(/^I fill the (full name|email|current address|permanent address) with "([^"]*)"$/, async function({ page }, fieldName: string, value: string) {
  const textBoxPage = new TextBoxPO(page);
  const normalizedFieldName = fieldName.toLowerCase().trim();

  switch (normalizedFieldName) {
    case 'full name':
      await textBoxPage.fillFullName(value);
      break;
    case 'email':
      await textBoxPage.fillEmail(value);
      break;
    case 'current address':
      await textBoxPage.fillCurrentAddress(value);
      break;
    case 'permanent address':
      await textBoxPage.fillPermanentAddress(value);
      break;
    default:
      throw new Error(`Unknown field name: ${fieldName}`);
  }
});

