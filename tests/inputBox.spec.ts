import { expect, test } from "@playwright/test";


test('testing Input Field Assertions', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const inputName = await page.locator("//input[@id='name']")
    await expect(inputName).toBeVisible()
    await expect(inputName).toBeEmpty() // Testing Input field is empty or not.
    await expect(inputName).toBeEditable();
    await expect(inputName).toBeEnabled();
    await inputName.fill("Rohit Khatana");
    await expect(inputName).not.toBeEmpty();
    await expect(inputName).toHaveValue("Rohit Khatana");
});