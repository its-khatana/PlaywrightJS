import { expect, type Locator, type Page} from '@playwright/test';


export class LoginPage{
    readonly page: Page; 
    readonly menuloginButton: string
    readonly inputuserName: string
    readonly inputuserPass: string
    readonly loginButton: string
    constructor(page: Page) {
        this.page = page;
        this.menuloginButton = "//a[@id='login2']";
        this.inputuserName = "//input[@id='loginusername']";
        this.inputuserPass = "//input[@id='loginpassword']";
        this.loginButton = "//button[normalize-space()='Log in']";
      }
    
    async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(username, password){
        await this.page.locator(this.menuloginButton).click();
        await this.page.locator(this.inputuserName).fill(username);
        await this.page.locator(this.inputuserPass).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyLoginSuccess(){
        await expect(await this.page.locator(this.menuloginButton)).not.toBeVisible({timeout: 15000});
    }
}