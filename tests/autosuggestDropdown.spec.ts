import { expect, test } from "@playwright/test";

// Important Functions: selectOption

test('Handle DropDowns', async({page})=>{
    await page.goto("https://www.redbus.in/");
    await page.locator("//input[@id='src']").fill("Gurgoan")
    await page.waitForSelector("(//li[contains(@class, 'iwsKbI')]//text[contains(@class,'placeHolderMainText')])[1]")
    const locators = await page.locator("//li[contains(@class, 'iwsKbI')]//text[contains(@class,'placeHolderMainText')]").all()
    for(let xpath of locators){
        const value = await xpath.textContent();
        console.log(value);
        if(value?.includes('Surgana')){
            await xpath.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});