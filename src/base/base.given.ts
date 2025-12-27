import {createBdd} from "playwright-bdd";
import {baseFixture} from "./base.fixture";
import {EPages} from "./base.config";

const {Given} = createBdd(baseFixture);

Given(/^User is on ([^"]*) page$/, async function ({goToPage}, page: EPages) {
  if (!Object.values(EPages).includes(page)) {
    throw new Error(`Unsupported page: ${page}. Allowed pages - ${Object.values(EPages).join(', ')}`)
  }
  await goToPage(page);
});
