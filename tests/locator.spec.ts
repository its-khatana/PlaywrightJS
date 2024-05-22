import {test, expect} from '@playwright/test'
//Another way to import const {test, expect} = require('@playwright/test')


// Note: Locators can be found using 
// 1) Property
// 2) CSS
// 3) Xpath
//Approach 1 - page.locator('property or css or xpath').click() 
//Approach 2 - page.click('locator'); ?

test('Learn how to find locators', async ({page}) =>{
    //await - wait for the promise to complete
    await page.goto("https://www.demoblaze.com/");
    // await expect(page.locator('id=login3'), "This xpath must be visible").toBeVisible({timeout: 10000})
    console.log("Hello")
    // await page.locator('id=login2').click()
    // const loc = await page.locator("//a[@id='cartur']")
    // expect(loc).toBeVisible()
});