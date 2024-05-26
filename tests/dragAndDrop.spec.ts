import { expect, test } from "@playwright/test";


test('Teting Drag and Drop', async({page})=>{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    await page.dragAndDrop("//div[@id='box1']", "//div[@id='box101']");
    // await await page.dragAndDrop('#source', '#target');
    await page.waitForTimeout(5000); 
});