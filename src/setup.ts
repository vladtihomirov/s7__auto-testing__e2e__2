import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { World } from './world';

let browser: Browser;

BeforeAll(async function() {
  browser = await chromium.launch({ headless: false });
});

Before(async function(this: World) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function(this: World) {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function() {
  await browser.close();
});

