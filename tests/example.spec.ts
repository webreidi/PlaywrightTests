import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('homepage has get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('Intro page has instructions', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
   // Click text=How to install Playwright
   await page.locator('text=How to install Playwright').click();
   await expect(page).toHaveURL('https://playwright.dev/docs/intro#installing-playwright');
 
   // Click text=Running the Example Test​
   await expect(page).toHaveTitle('Installation | Playwright');
});
