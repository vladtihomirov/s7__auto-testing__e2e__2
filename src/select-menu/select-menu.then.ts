import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {SelectMenuPO} from "./select-menu.po";

const { Then } = createBdd(baseFixture);

Then(/^the selected value should be "([^"]*)"$/, async function({ page }, expected: string) {
  const po = new SelectMenuPO(page);
  const text = await po.getSelectedValueText();
  expect(text?.trim()).toBe(expected);
});

Then(/^the selected one should be "([^"]*)"$/, async function({ page }, expected: string) {
  const po = new SelectMenuPO(page);
  const text = await po.getSelectedOneText();
  expect(text?.trim()).toBe(expected);
});

Then(/^the old style selected color should be "([^"]*)"$/, async function({ page }, expected: string) {
  const po = new SelectMenuPO(page);
  const text = await po.getOldStyleSelectedLabel();
  expect(text?.trim()).toBe(expected);
});

Then(/^the multiselect should contain: (.+)$/, async function({ page }, list: string) {
  const po = new SelectMenuPO(page);
  const expected = list.split(',').map(s => s.trim()).filter(Boolean);
  for (const item of expected) {
    expect(await po.isMultiSelected(item)).toBe(true);
  }
});


