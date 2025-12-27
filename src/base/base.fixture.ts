import { test as base } from "playwright-bdd";

import {config, EPages, pagePaths} from "./base.config";

export type BaseAppFixture = {
  goToPage: (pageName: EPages) => Promise<void>;
};

export const baseFixture = base.extend<BaseAppFixture>({
  goToPage: [
    async ({ page }, use) => {
      await use(async (pageName: EPages) => {
        const path: string = pagePaths[pageName];
        await page.goto(config.BASE_URL + path, { waitUntil: "domcontentloaded" });
        try {
          await page.waitForLoadState("networkidle", { timeout: 5000 });
        } catch {
          // ignore
        }
      });
    },
    { scope: "test" },
  ]
});
