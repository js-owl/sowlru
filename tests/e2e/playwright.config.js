import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 30000,
  use: {
    baseURL: process.env.SOWL_BASE_URL || 'http://127.0.0.1:8765',
    headless: true,
  },
  webServer: process.env.SOWL_BASE_URL
    ? undefined
    : {
        command: 'php -S 127.0.0.1:8765 -t ../..',
        cwd: __dirname,
        url: 'http://127.0.0.1:8765',
        reuseExistingServer: true,
      },
});
