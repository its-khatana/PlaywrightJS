import { expect, type Locator, type Page } from "@playwright/test";

export class SigninPage {
    readonly page: Page;
    readonly usernameInput: Locator
    readonly userpassInput: Locator
    readonly loginButton: Locator
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator("//input[@name='email']")
        this.userpassInput = page.locator("//input[@name='password']")
        this.loginButton = page.locator("//button[normalize-space()='Log In']")
    }

    async loginUser(email, password){
        await this.page.goto("env/users/sign_in");
        await this.usernameInput.fill(email);
        await this.userpassInput.fill(password);
        await this.loginButton.click()
    }
}
