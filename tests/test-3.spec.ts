import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to about:blank
  await page.goto('about:blank');


  // Go to https://welcome.miami.edu/
  await page.goto('https://welcome.miami.edu/');

  // Click #search >> text=myUM
  await page.locator('#search >> text=myUM').click();
  await expect(page).toHaveURL('https://auth.miami.edu/adfs/ls/?SAMLRequest=fZHNTsMwEIRfJfK9cX7a0FpNpNAeqFQgIoEDl8qJXWLJsYPXBvr2JA2IcunVnvl2dnYNtJM9yZ1t1RN%2Fdxys99VJBeT8kSJnFNEUBBBFOw7ENqTM7%2Fck8gPSG211oyXycgBurNBqoxW4jpuSmw%2FR8OenfYpaa3sgGHcn1%2FmdoJ3wOXO4bEVda8lt6wNoPFIjXDyWFfK2Qwyh6Aj8s9Mh44WdsiNgCRh5u22KDst5sohqNqfLmiZhMw%2BCkB3jRRDX9XK1iuNBBuD4ToGlyqYoCqJoFqxmUVKFCQluSBy%2BIq%2F42ehWKCbU2%2FX160kE5K6qitmU%2FIUbOKceBChbjyWS82BzUet1LP3tEmUNhYYyfhiKZq4Z3w5cWcFOgq3xBXsa1JOHAbbbFlqK5uTlUurPjeHU8hSFCGeT5f%2Bxs28%3D&RelayState=cookie%3A1664208451_8b2f');

});