import {createBdd} from "playwright-bdd";
import {baseFixture} from "./base.fixture";

const { When } = createBdd(baseFixture)

When(/^I wait for ([0-9]*)s$/, async function({ page }, seconds: string) {
  await new Promise(resolve => setTimeout(resolve, +seconds * 1000));
});
