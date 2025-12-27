import {devices, PlaywrightTestConfig} from "@playwright/test";

export const config = {
  BASE_URL: "https://demoqa.com"
}

export enum EPages {
  ALERTS = 'Alerts',
  AUTOMATION_PRACTICE_FORM = 'PracticeForm',
  TEXT_BOX = 'TextBox',
  TOOL_TIPS = 'ToolTips',
  SELECT_MENU = 'SelectMenu',
  DATE_PICKER = 'DatePicker',
  SLIDER = 'Slider',
  CHECK_BOX = 'CheckBox',
  RADIO_BUTTON = 'RadioButton',
  DROPPABLE = 'Droppable'
}

export const pagePaths: { [key in EPages]: string } = {
  [EPages.ALERTS]: '/alerts',
  [EPages.AUTOMATION_PRACTICE_FORM]: '/automation-practice-form',
  [EPages.TEXT_BOX]: '/text-box',
  [EPages.TOOL_TIPS]: '/tool-tips',
  [EPages.SELECT_MENU]: '/select-menu',
  [EPages.DATE_PICKER]: '/date-picker',
  [EPages.SLIDER]: '/slider',
  [EPages.CHECK_BOX]: '/checkbox',
  [EPages.RADIO_BUTTON]: '/radio-button',
  [EPages.DROPPABLE]: '/droppable',
}

export const getBaseConfig = (): Partial<PlaywrightTestConfig> => {
  return {
    grepInvert: [new RegExp(`@status:IN_PROGRESS`, "i")],
    webServer: {
      command: `npm run start:${process.env.SERVICE_NAME}:test`,
      url: "http://localhost.backend-capital.com:4200",
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
    use: { screenshot: "only-on-failure", trace: "off", video: "off" },
    projects: [
      {
        name: "chromium",
        use: {
          ...devices["Desktop Chrome"],
          viewport: { width: 1540, height: 820 },
          launchOptions: { args: ["--headless=chrome"] },
          headless: true,
        },
      },
    ],
    timeout: 240000,
    retries: 0,
    metadata: { execution_start_time: new Date().getTime() },
  };
};
