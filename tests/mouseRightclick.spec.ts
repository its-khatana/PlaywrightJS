import { expect, test } from "@playwright/test";


test('Teting Right CLick', async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    await page.locator("//span[@class='context-menu-one btn btn-neutral']").click({button: 'right'}) // 3 options: right , left, middle 
    await page.waitForTimeout(5000); 
});