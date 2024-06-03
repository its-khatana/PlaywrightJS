import {test, expect} from "@playwright/test";


test.only('Method I', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    // Method 1
    await page.waitForTimeout(5000);
    const elements= await page.$$("//h4[@class='card-title']") // Discoureaged: Instead use page.locator().all()
    console.log(elements.length)
    for(let element of elements){
        console.log(await element.textContent());
    };
});


test('Method II', async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    // Method 1
    await page.waitForTimeout(5000);
    const elements= await page.locator("//h4[@class='card-title']").all() //returns list of locators.
    console.log(elements.length)
    for(let element of elements){
        console.log(await element.textContent());
    };
});