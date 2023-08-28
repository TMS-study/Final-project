import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 60 * 1000,
    expect: { timeout: 20000 },

    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        viewport: { width: 1800, height: 1024 },
        actionTimeout: 40 * 1000,
        navigationTimeout: 30 * 1000
    },

    projects: [
        {
            
            name: `Chrome`,
            use: {

                browserName: `chromium`,
                channel: `chrome`,
                headless: false,
                viewport: { width: 1500, height: 730 },
                ignoreHTTPSErrors: true,
                acceptDownloads: true,
                screenshot: `only-on-failure`,
                video: `retain-on-failure`,
                trace: `retain-on-failure`,


            },
        },
    ],

    workers: 3,
    fullyParallel: true,
    reporter: [
        ['html'],
        [
            "allure-playwright",
            {
                detail: true,
                outputFolder: "allure-report",
                suiteTitle: true,
            }
        ],
    ],
};

export default config;