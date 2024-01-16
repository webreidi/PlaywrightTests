using System.Text.RegularExpressions;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace PlaywrightTests;

[TestClass]
public class DotnetPlaywrightTests : PageTest
{
    [TestMethod]
    async public Task TestMiamiEdu()
    {

        var chromium = Playwright.Chromium;
        // Make sure to run headed.
        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });

        var context = await browser.NewContextAsync();

        // Open new page
        var page = await context.NewPageAsync();

        // Go to https://playwright.dev/
        await page.GotoAsync("https://playwright.dev/");

        // Go to https://welcome.miami.edu/
        await page.GotoAsync("https://welcome.miami.edu/");

        // Click a:has-text("U Miami Home")
        await page.Locator("a:has-text(\"U Miami Home\")").ClickAsync();
        await page.WaitForURLAsync("https://welcome.miami.edu/");

        // Click #mega-menu-hlist-container >> text=Academic Calendar
        await page.Locator("#mega-menu-hlist-container >> text=Academic Calendar").ClickAsync();
        await page.WaitForURLAsync("https://registrar.miami.edu/dates-and-deadlines/academic-calendars/index.html");

        // Click #global_footer >> text=myUM
        await page.Locator("#global_footer >> text=myUM").ClickAsync();
        await page.WaitForURLAsync("https://auth.miami.edu/adfs/ls/?SAMLRequest=fZFBU8IwEIX%2FSid3mjaCQIZ2BuEgM6gdih68MNtkkcy0CXZTlX9vS3XEC9fkvW%2Ffvp0RVOVRzht%2FsBt8b5B88FWVluT5I2FNbaUDMiQtVEjSK5nPH9ZShJE81s475UoWzImw9sbZhbPUVFjnWH8Yhc%2BbdcIO3h9Jcl6dmiqsDFQmRN3w%2FGCKwpXoDyGR4x1V8Owp37Jg2cYwFjrgnx3ajBd20HviJXEWrJYJ2xWA0VSgBoiGw1EUDydjobWIR%2BomBgX7VkbU4MqSB%2BsTJiIhBtFkIG638VSOJlKMX1mQ%2FWx0Z6w29u36%2BkUvInm%2F3WaDPvkL1nRO3QpYOutKlOfB9UWt17Hw2yVLFZACjbu2aN2o7m2H1ht9MnrGL9j9oKN8bGGrZeZKo07BvCzd56JG8JiwmPG0t%2Fw%2FdvoN&RelayState=cookie%3A1661543907_3a6b");

        // Click text=caneidhelp.miami.edu
        await page.Locator("text=caneidhelp.miami.edu").ClickAsync();
        await page.WaitForURLAsync("https://caneidhelp.miami.edu/caneid/");

        await Expect(page).ToHaveTitleAsync(new Regex("CaneID Self-Service"));
    }

    [TestMethod]
    async public Task TestHasTitle()
    {
        var chromium = Playwright.Chromium;
        // Make sure to run headed.
        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });

        var context = await browser.NewContextAsync();

        // Open new page
        var page = await context.NewPageAsync();

        // Go to https://playwright.dev/
        await page.GotoAsync("https://playwright.dev/");

        await Expect(page).ToHaveTitleAsync(new Regex("Playwright"));
    }

    [TestMethod]
    async public Task TestGetStartedLink()
    {
        var chromium = Playwright.Chromium;
        // Make sure to run headed.
        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });

        var context = await browser.NewContextAsync();

        // Open new page
        var page = await context.NewPageAsync();

        // Go to https://playwright.dev/
        await page.GotoAsync("https://playwright.dev/");

        // Click text=Get Started
        await page.Locator("text=Get Started").ClickAsync();
        await page.WaitForURLAsync("https://playwright.dev/docs/intro");

        await Expect(page).ToHaveTitleAsync(new Regex("Introduction | Playwright"));
    }
}
