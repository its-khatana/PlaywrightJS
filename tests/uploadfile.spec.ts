import {expect, test} from "@playwright/test"

// HOMEWORK FROM TUTORIALS.
test('Uplaod a Single File', async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle('Multiple File Upload Input Example')
    await expect(await page.locator('#filesToUpload')).toBeVisible({timeout: 15000})
    // const inputField = await page.locator("//input[@name='filesToUpload']")
    await page.locator('#filesToUpload').setInputFiles(['PlaywrightTSC/uploadFiles/testfile.txt']);
    // await page.waitForTimeout(15000);
});


test.skip('Uplaod Multiple Files', async({page})=>{
    // await page.goto("");
});