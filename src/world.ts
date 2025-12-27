import {Dialog, Page, ChromiumBrowserContext} from "@playwright/test";

export interface World {
  dialog: Dialog;
  page: Page;
  context: ChromiumBrowserContext;
}
