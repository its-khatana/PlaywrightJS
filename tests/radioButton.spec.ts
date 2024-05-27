import { expect, test } from "@playwright/test";

// Note: Radio button and checkbox have same functions
test('Handle Radio Buttons', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const inputName = await page.locator("//input[@id='male']")
    await expect(inputName).toBeVisible();
    await expect(inputName).not.toBeChecked();
    await inputName.check();
    await expect(inputName).toBeChecked();
    await expect(await inputName.isChecked()).toBeTruthy(); // line 10 and 11 are same.
    await page.waitForTimeout(5000);
});