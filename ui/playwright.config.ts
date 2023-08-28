import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 60 * 1000,
    expect: { timeout: 20000 },
    
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        viewport: {width:1800, height: 1024},
        actionTimeout: 60*1000,
        navigationTimeout: 60*1000,
        headless: false
    },

    projects: [
        {
            name: 'chrome',
            use: {
                ...devices['Desktop Chrome'],
                browserName: 'chromium',
            },
        },


        {
            name: 'mobile',
            use:{ ...devices['Galaxy S8']}
        },
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