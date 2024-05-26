import { expect, test } from "@playwright/test";


test('Teting Double CLick Method 1', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[normalize-space()='Copy Text']").click({clickCount: 2})
    await page.waitForTimeout(5000); 
});


test.only('Teting Double CLick Method 2', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[normalize-space()='Copy Text']").dblclick()
    await expect(await page.locator("//input[@id='field2']")).toHaveValue("Hello World!")
    await page.waitForTimeout(5000); 
});