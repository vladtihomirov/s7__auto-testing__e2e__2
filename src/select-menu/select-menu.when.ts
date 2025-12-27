import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {SelectMenuPO} from "./select-menu.po";

const { When } = createBdd(baseFixture);

When(/^I select value as "([^"]*)"$/, async function({ page }, value: string) {
  const po = new SelectMenuPO(page);
  await po.selectValue(value);
});

When(/^I select one as "([^"]*)"$/, async function({ page }, value: string) {
  const po = new SelectMenuPO(page);
  await po.selectOne(value);
});

When(/^I select old style color as "([^"]*)"$/, async function({ page }, color: string) {
  const po = new SelectMenuPO(page);
  await po.selectOldStyle(color);
});

When(/^I multi select colors: (.+)$/, async function({ page }, list: string) {
  const po = new SelectMenuPO(page);
  const items = list.split(',').map(s => s.trim()).filter(Boolean);
  for (const item of items) {
    await po.addMultiSelect(item);
  }
});


