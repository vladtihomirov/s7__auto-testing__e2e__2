import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {expect} from "@playwright/test";
import {DroppablePO} from "./droppable.po";

const { Then } = createBdd(baseFixture);

Then(/^the drop area should display "([^"]*)"$/, async function({ page }, expected: string) {
  const po = new DroppablePO(page);
  expect((await po.getDropText())?.trim()).toBe(expected);
});


