import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {ToolTipsPO} from "./tool-tips.po";

const { When } = createBdd(baseFixture);

When(/^I hover the tool tip button$/, async function({ page }) {
  const tt = new ToolTipsPO(page);
  await tt.hoverButton();
});

When(/^I hover the tool tip text field$/, async function({ page }) {
  const tt = new ToolTipsPO(page);
  await tt.hoverTextField();
});

When(/^I hover the link "([^"]*)"$/, async function({ page }, text: string) {
  const tt = new ToolTipsPO(page);
  await tt.hoverLinkByText(text);
});


