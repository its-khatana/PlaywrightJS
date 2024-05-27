import { expect, test } from "@playwright/test";
// Note: 3 Methods are available in Keyboard Class.
// up, down , press
//press  - is used for combination of 2 keys. await page.keyboard.press('Shift+A');
//down - is used for single key.
test('Keyboard Actions Copy Paste', async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("My name is Rohit Khatana!");
    // Step1: Cntrl + A
    await page.keyboard.press('Control+A');

    // Step2: Cntrl + C
    await page.keyboard.press('Control+C');

    //Step3: Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab') // This is used to release the command pressed.


    //Step4: Cntrl + V
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);

});