import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {SliderPO} from "./slider.po";

const { When } = createBdd(baseFixture)

When(/^I set the slider to ([0-9]{1,3})$/, async function({ page }, value: string) {
  const po = new SliderPO(page);
  await po.setValue(+value);
});


