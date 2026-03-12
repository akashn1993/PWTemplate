import { defineConfig, devices } from '@playwright/test';
const env = process.env.TEST_ENV;

export default defineConfig({
  testDir: './tests',

 

  fullyParallel: true,

  workers: 10,

  reporter: 'html',

  use: {

    trace: 'on',
    screenshot: 'only-on-failure',
  },



  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: {
          args: ["--start-fullscreen"],
        },
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     headless: false,
    //     launchOptions: {
    //       args: ["--start-fullscreen"],
    //     },
    //   },
    // },
    // {
    //   name: 'MSEdge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     headless: false,
    //     launchOptions: {
    //       args: ["--start-fullscreen"],
    //     },
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  metadata: {
    env: env,
    testDataPath: `./testdata/${env}_testdata.json`
  }
});
