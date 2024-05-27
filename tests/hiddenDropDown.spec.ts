import { expect, test } from "@playwright/test";

// Important Functions: selectOption

test('Handle Hidden DropDowns (Select Job Title as Automation Tester', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[normalize-space()='Login']").click()
    await page.locator("(//span[normalize-space()='PIM'])[1]").click()
    await page.locator("//label[normalize-space()='Job Title']/../..//div[contains(@class,'oxd-select-wrapper')]").click()
    await page.waitForTimeout(5000);
    await page.locator("//div[@role='option']//span[normalize-space()='Automaton Tester']").click()
    await page.waitForTimeout(3000);
});