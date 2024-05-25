import { expect, test } from "@playwright/test";

test('Handles Nested Frames', async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const iframe = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    const innerFrames = await iframe.childFrames(); // will return an list of all the inner iframes.
    await expect(innerFrames.length).toBe(1);
    const innerFrame = innerFrames[0];
    await innerFrame.locator("(//div[@class='rseUEf nQOrEb'])[1]").check();
    await page.waitForTimeout(5000);
});