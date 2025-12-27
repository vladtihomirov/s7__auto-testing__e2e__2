import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {CheckboxPO} from "./checkbox.po";

const { Then } = createBdd(baseFixture);

Then(/^checkbox "([^"]*)" should be checked$/, async function({ page }, label: string) {
  const po = new CheckboxPO(page);
  expect(await po.isCheckboxChecked(label)).toBe(true);
});


