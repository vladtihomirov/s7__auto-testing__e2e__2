import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {RadioButtonPO} from "./radio-button.po";

const { Then } = createBdd(baseFixture);

Then(/^radio result should display "(Yes|Impressive)"$/, async function({ page }, expected: 'Yes' | 'Impressive') {
  const po = new RadioButtonPO(page);
  expect(await po.getResultSelection()).toBe(expected);
});


