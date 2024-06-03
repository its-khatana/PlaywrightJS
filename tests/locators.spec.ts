import {test, expect} from "@playwright/test";

//Build in Locators 

// Locating elements in Playwright
//CSS -- #value
//Xpath
//attribute - 'key=value' - 'id=login2'
//Synatax - page.locator(css or xpath or property)

//page.locator().click()
//page.click('locator')


test('Testing Build in Locator', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    // Attribute
    // await page.locator('id=login2').click() 

    //css 
    await page.locator("#login2").click()
    // await page.click('id=login2')
    //Note: fill() and type() , both are same.
});


test.only("TestingAutowait", async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//input[@id='hello']") 
});