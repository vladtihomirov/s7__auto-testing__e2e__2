import {createBdd} from "playwright-bdd";
import {baseFixture} from "../base/base.fixture";
import {DroppablePO} from "./droppable.po";

const { When } = createBdd(baseFixture)

When(/^I drag the draggable to the drop area$/, async function({ page }) {
  const po = new DroppablePO(page);
  await po.dragAndDrop();
});


