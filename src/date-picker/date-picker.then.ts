import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {DatePickerPO} from "./date-picker.po";

const { Then } = createBdd(baseFixture);

Then(/^the date input should be "([^"]*)"$/, async function({ page }, expected: string) {
  const po = new DatePickerPO(page);
  expect(await po.getDate()).toBe(expected);
});


