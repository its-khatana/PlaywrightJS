import { test, expect, Browser, Page, BrowserContext } from '@playwright/test';

// test.beforeEach('Open start URL', async ({ page }) => {
//   console.log(`Running ${test.info().title}`);
//   await page.goto('https://my.start.url/');
// });

// test.beforeEach('End start URL', async ({ page }) => {
//   console.log(`Running ${test.info().title}`);
//   // await page.goto('https://my.start.url/');
// });

// test.afterAll(async () => {
//   console.log('Done with tests');
//   // ...
// });

test('has title 1', async ({ page }) => {
  await test.info().attach('screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});




