import {expect, test} from "@playwright/test"

test('Handling Table/ Select alll the products on Page 1', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const xpaths = await page.locator("//table[@id='productTable']//tbody//tr").all();
    for(let xpath of xpaths){
        await xpath.locator("//input").check()
    }
    await page.waitForTimeout(15000);
});

// Filter function very helpful.
test('Filter Function, Select the 4th Product', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const xpaths = await page.locator("//table[@id='productTable']//tbody//tr");
    const p4= await xpaths.filter({
        hasText: 'Product 4',
    })
    await p4.locator("//input").check();
    await page.waitForTimeout(5000);
});




test('Filter Function, Select Multiple Products let say 1,3,5', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const rows = await page.locator("//table[@id='productTable']//tbody//tr");
    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');
    await page.waitForTimeout(5000);
});


//Note: nth Function is very important
/*Returns locator to the n-th matching element. It's zero based, nth(0) selects the first element.
Usage
const banana = await page.getByRole('listitem').nth(2);

Arguments
index number#

Returns
Locator#
*/

test('Test nth Function, Select 2nd Product (Its 0 based indexing , so product 2 is at index=1)', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const rows = await page.locator("//table[@id='productTable']//tbody//tr");
    await rows.nth(1).locator("//input").check();
    await page.waitForTimeout(5000);
});


test.only("Pagination Print data of all the pages", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const noOfPages = await page.locator("//ul[@id='pagination']//li//a").count()
    const pages = await page.locator("//ul[@id='pagination']//li//a");
    console.log("No of Pages", noOfPages);
    for(let p=0; p<noOfPages;p++){
        if(p>0){ // Then only we need to select other page.
            await pages.nth(p).click()
        }
        const rows = await page.locator("//table[@id='productTable']//tbody//tr").all();
        for(let r of rows){
            console.log(await r.allTextContents());
        }
    }
});


async function selectProduct(rows, page, productName){
    const product= await rows.filter({
        hasText: productName,
    });
    await product.locator("//input").check();
};