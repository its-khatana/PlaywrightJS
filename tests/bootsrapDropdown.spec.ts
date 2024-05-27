import { expect, test } from "@playwright/test";

/// Bootstrap Dropdowans are those in which select and option tags are not present.

test('Handle Bootstrap DropDowns', async({page})=>{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator("//button[@title='HTML, CSS']").click();
    await page.waitForTimeout(2000);
    const vals = ['Python', 'Java'];
    // let xpath = '//input[@type="checkbox" and @value="${val}"]';
    const locators = await page.locator("//input[@type='checkbox']/..").all()
    
    for(let xpath of locators){
        const val =await xpath.textContent();
        console.log(val);
        if(val?.includes('Java') || val?.includes('Python')){
            await xpath.click();
        }
    }
    await page.waitForTimeout(5000);

    
});