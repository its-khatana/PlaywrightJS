import {test, expect} from "@playwright/test";


test("Multiple Pages", async({page, browser})=>{
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://playwright.dev/docs/api/class-browsercontext")
    await page2.goto("https://testautomationpractice.blogspot.com/")
    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(5000);
});