import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


// Charger le bon fichier .env selon ENVIRONMENT
dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.ENVIRONMENT || 'development'}`),
});

export default defineConfig({
  testDir:"./e2e/tests", // tes fichiers auth.spec.ts, admin.spec.ts, etc.
  timeout: 240_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Base URL injectée depuis ton .env
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    
    headless: false, // voir le navigateur en action
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
