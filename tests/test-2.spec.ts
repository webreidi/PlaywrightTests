import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://welcome.miami.edu/
  await page.goto('https://welcome.miami.edu/');

  // Click text=Majors and Programs
  await page.locator('text=Majors and Programs').click();
  await expect(page).toHaveURL('https://admissions.miami.edu/undergraduate/academics/majors-by-school-or-college/index.html');

  // Click a:has-text("Pre-Law")
  await page.locator('a:has-text("Pre-Law")').click();
  await expect(page).toHaveURL('https://admissions.law.miami.edu/about/admissions-advice/');

});