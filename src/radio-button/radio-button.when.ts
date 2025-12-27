import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {RadioButtonPO} from "./radio-button.po";

const { When } = createBdd(baseFixture)

When(/^I select radio "(Yes|Impressive)"$/, async function({ page }, option: 'Yes' | 'Impressive') {
  const po = new RadioButtonPO(page);
  await po.select(option);
});


