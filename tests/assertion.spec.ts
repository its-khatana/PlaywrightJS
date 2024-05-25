import {expect, test} from "@playwright/test"

test('Login Cnvrg', async ({page}) => { // we are passing page object
    const emailId = 'testuser'+Math.random()+ '@mailinator.com'
    const userName = emailId.split('@')[0]
    const userPass = 'Cnvrg@123'
    console.log(emailId)
    await page.goto('http://app.aks-cicd-22959.cicd.cnvrg.me/users/sign_up');
    await expect(page).toHaveURL('http://app.aks-cicd-22959.cicd.cnvrg.me/users/sign_up');
    const email_xpath = await page.locator("//input[@name='email']")
    await expect(email_xpath, "Email Field Should be Visible").toBeVisible()
    await email_xpath.fill(emailId)
    const username_xpath = await page.locator("//input[@name='username']").fill(userName)
    const password_xpath = await page.locator("//input[@name='password']").fill(userPass)
    await page.locator("//button[normalize-space()='Sign up']").click({timeout: 10000})
    console.log({emailId, userName, userPass})
    await page.waitForTimeout(5000)
    // await page.goto("https://www.demoblaze.com/");
});