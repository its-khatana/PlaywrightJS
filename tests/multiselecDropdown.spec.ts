import { expect, test } from "@playwright/test";

// Important Functions: selectOption

test('Handle MultiSelect DropDowns', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdown = await page.locator("//select[@id='colors']")
    await dropdown.selectOption(['Red', 'Green', 'Blue']) // Pass an array of options
    await dropdown.selectOption([{label: 'White'}, {label: 'Yellow'}]) // 2nd way
    // await page.selectOption("//select[@id='colors']", ["Red", "Green"]); // 3rd way 
    await expect(dropdown).toContainText('White')
    await page.waitForTimeout(5000);
});