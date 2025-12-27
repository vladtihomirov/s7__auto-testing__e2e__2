import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {DatePickerPO} from "./date-picker.po";

const { When } = createBdd(baseFixture)

When(/^I set the date to "([^"]*)"$/, async function({ page }, date: string) {
  const po = new DatePickerPO(page);
  await po.setDate(date);
});


