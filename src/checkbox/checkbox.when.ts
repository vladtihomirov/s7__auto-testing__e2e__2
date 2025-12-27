import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {CheckboxPO} from "./checkbox.po";

const { When } = createBdd(baseFixture)

When(/^I expand all checkboxes$/, async function({ page }) {
  const po = new CheckboxPO(page);
  await po.expandAll();
});

When(/^I select checkbox "([^"]*)"$/, async function({ page }, label: string) {
  const po = new CheckboxPO(page);
  await po.selectCheckbox(label);
});


