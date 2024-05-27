import { expect, test } from "@playwright/test";

//Important functions: 1. check() - to select , 2) uncheck() - to unselect.

// Note: Radio button and checkbox have same functions
test('Handle Single CheckBox', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Single CheckBox
    const checkboxInput = await page.locator("//input[@id='sunday']")
    await expect(checkboxInput).not.toBeChecked();
    await expect(checkboxInput).toBeVisible();
    checkboxInput.check();
    await expect(checkboxInput).toBeChecked();
    checkboxInput.uncheck()
    await expect(checkboxInput).not.toBeChecked();
    await page.waitForTimeout(5000);
});


test.only('Handle Multiple CheckBox', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Single CheckBox
    const checkBoxes = ["//input[@id='sunday']", "//input[@id='friday']", "//input[@id='tuesday']"]
    for(let checkbox of checkBoxes){
        const xpath = await page.locator(checkbox);
        await expect(xpath).not.toBeChecked();
        await xpath.check();
        await expect(xpath).toBeChecked();
    }
    await page.waitForTimeout(5000);
});