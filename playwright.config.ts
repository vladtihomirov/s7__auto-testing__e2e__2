import { defineConfig, devices } from '@playwright/test';
import {defineBddConfig} from "playwright-bdd";

const workersFromEnv = process.env.WORKERS ?? process.env.workers;
const workers = workersFromEnv ? Number(workersFromEnv) : undefined;

const resolutions = [
  { name: "1920x1080", width: 1920, height: 1080 },
  { name: "1366x768", width: 1366, height: 768 },
];

export default defineConfig({
  testDir: defineBddConfig({
    outputDir: "./.features-gen",
    paths: [
      "./src/**/**.feature",
    ],
    require: [
      "./src/base/base.given.ts",
      "./src/base/base.fixture.ts",
      "./src/**/**.when.ts",
      "./src/**/**.then.ts",
      "./src/**/**.given.ts",
    ],
    featuresRoot: "./",
  }),
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: { screenshot: "only-on-failure", trace: "off", video: "off" },
  projects: [
    ...resolutions.map(res => ({
      name: `chromium-${res.name}`,
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: res.width, height: res.height },
        launchOptions: { args: ["--headless=chrome"] },
        headless: true,
      },
    })),
    ...resolutions.map(res => ({
      name: `firefox-${res.name}`,
      use: {
        ...devices["Desktop Firefox"],
        viewport: { width: res.width, height: res.height },
        launchOptions: {
          firefoxUserPrefs: {
            "browser.sessionstore.enabled": false,
            "browser.sessionstore.resume_from_crash": false,
            "browser.sessionstore.max_windows_undo": 0,
            "browser.sessionstore.max_tabs_undo": 0,
            "browser.sessionstore.max_serialize_back": 0,
            "browser.sessionstore.max_serialize_forward": 0,
          },
        },
        headless: true,
      },
      fullyParallel: false,
    })),
  ],
  workers,
  timeout: 30000,
  retries: 5,
  metadata: { execution_start_time: new Date().getTime() },
});
