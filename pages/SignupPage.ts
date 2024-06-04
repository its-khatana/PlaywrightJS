import { expect , type Page, type Locator } from "@playwright/test";


export class SignupPage{
    readonly page: Page
    readonly emailInput: Locator
    readonly passInput: Locator
    readonly userNameInput: Locator
    readonly signUpButton: Locator
    readonly skipButton: Locator
    readonly nextButton: Locator
    readonly orgInput: Locator
    readonly userNameHomePage: Locator
    constructor(page){
        this.page = page
        this.emailInput = page.locator("//input[@name='email']")
        this.passInput = page.locator("//input[@name='password']")
        this.userNameInput = page.locator("//input[@name='username']")
        this.signUpButton = page.locator("//button[normalize-space()='Sign up']")
        this.nextButton = page.locator("//span[normalize-space()='Next']")
        this.skipButton = page.locator("//button[normalize-space()='Skip']")
        this.orgInput = page.locator("//input[@placeholder='Organization name']")
        this.userNameHomePage = page.locator("//span[@class='user-name']");
    }

    async signUpUser(){
        const emailId = 'testuser'+Math.random()+ '@mailinator.com'
        const username = emailId.split('@')[0]
        const orgName =  'org' + getRandomString(5);
        const userDetails = {username: username, useremail: emailId, password: 'Cnvrg@123', orgName: orgName, orgslug: ''}
        await this.page.goto("https://app.aks-cicd-23173.cicd.cnvrg.me/users/sign_up");
        await expect(await this.page.locator("//h3[normalize-space()='Turbocharge your data science']")).toBeVisible()
        await this.emailInput.fill(emailId)
        await this.userNameInput.fill(username)
        await this.passInput.fill(userDetails.password)
        await this.signUpButton.click()
        await this.orgInput.fill(userDetails.orgName)
        await this.nextButton.click()
        await this.skipButton.click()
        await this.skipButton.click()
        await this.skipButton.click()
        await this.skipButton.click()
        await this.skipButton.click()
        await expect(await this.userNameHomePage).toBeVisible({timeout: 20000});
        console.log(await this.page.url())
        await this.page.goto("https://app.aks-cicd-23173.cicd.cnvrg.me")
        var fetchedUrl = await this.page.url()
        userDetails.orgslug = fetchedUrl.split('/')[1]
        console.log(userDetails.orgslug)
        return userDetails;
    }
}


function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}