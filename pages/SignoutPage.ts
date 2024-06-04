import { expect, type Locator, type Page } from "@playwright/test";

export class SignOutPage {
    readonly userName: Locator
    readonly buttonLogout: Locator
    readonly page: Page
    constructor(page){
        this.page = page;
        this.userName = page.locator("//span[@class='user-name']");
        this.buttonLogout = page.locator("//a[normalize-space()='Log out']");
    }

    async logOutUser(){
        await this.userName.click();
        await this.buttonLogout.click()
        await this.page.waitForTimeout(5000);
    }
}