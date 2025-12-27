import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {SliderPO} from "./slider.po";

const { Then } = createBdd(baseFixture);

Then(/^the slider value should be "([^"]*)"$/, async function({ page }, expected: string) {
  const po = new SliderPO(page);
  expect(await po.getValue()).toBe(expected);
});


