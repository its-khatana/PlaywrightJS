import { expect, test } from "@playwright/test";

test('Test Mouse Hover', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[normalize-space()='Login']").click()
    await page.locator("//button[@title='Assign Leave']//*[name()='svg']").hover()
    await page.waitForTimeout(5000);
});