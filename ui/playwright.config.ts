import { PlaywrightTestConfig, devices } from '@playwright/test';
import BrowserFactory from './utils/browser.factory';

const config: PlaywrightTestConfig = {
    timeout: 60 * 1000,
    expect: { timeout: 20000 },
    
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        BrowserFactory.getBrowserObject()
      ],

    workers: 1,
    fullyParallel: true,
    reporter: [
        ['html'],
        ["allure-playwright",
            {
              detail: true,
              outputFolder: "allure-report",
              suiteTitle: true,
            }
        ],
    ],
};

export default config;