import { expect, test } from "@playwright/test";

// Iframe -- HTML page embedded inside another HTML page.

test('Handle Frams', async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // Total iFrames 
    const count = await page.frames();
    console.log("No of Frames:",count.length);

    //(Popular) Approach 1:  Create the object of frame using Name or URL.
    const iframe1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await iframe1.locator("//input[@name='mytext1']").fill("Rohit Khatana")
    await page.waitForTimeout(5000)

});