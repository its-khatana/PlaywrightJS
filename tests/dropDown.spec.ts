import { expect, test } from "@playwright/test";

// Important Functions: selectOption

test('Handle DropDowns', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple aways to select the dropdown.
    //Step1: we need to get the dropdown.


    ///Note Important: <option value="india" xpath="1">India</option> here value is india and Lable is India. 
    const dropdown = await page.locator("//select[@id='country']")
    await dropdown.selectOption({value: 'india'}) // By Value  await dropdown.selectOption({value: 'india'})
    await dropdown.selectOption({value: 'india'}) // By Lable
    await dropdown.selectOption({index: 1}) // By Index.
    await dropdown.selectOption('India') // Visible text or lable.
    await page.waitForTimeout(5000);
});


test.only('Assertions DropDowns', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Assertions
    // // 1. Check no. of Options. Approach 1
    // const dropdown = await page.locator("//select[@id='country']//option")
    // await expect(dropdown).toHaveCount(10);


    // 2. Check no of Options. Approach 2
    // const options = await page.$$("//select[@id='country']//option")
    // console.log(options.length);
    // await expect(options.length).toBe(10);

    //3. Check for a particular value in dropdown.
    const optionsText = await page.locator("//select[@id='country']").textContent();
    console.log(optionsText);
    await expect(optionsText).toContain('India')

});