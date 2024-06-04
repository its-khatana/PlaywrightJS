import { expect, type Locator, type Page} from '@playwright/test';


export class HomePage{
    readonly page: Page; 
    readonly productList: string
    readonly addToCardButton: string
    readonly cartMenuButton: string
    readonly logutOutButton: Locator
    constructor(page: Page) {
        this.page = page;
        this.productList = "//h4[contains(@class,'card-title')]"
        this.addToCardButton = "//a[normalize-space()='Add to cart']"
        this.cartMenuButton = "//a[normalize-space()='Cart']"
        this.logutOutButton = page.locator("//a[@id='logout2']")
      }
    
    
    async addProductToCart(productName) {
        const products = await this.page.locator(this.productList).all(); 
        for(let product of products){
            const pName = await product.textContent();
            console.log(pName);
            if (pName?.includes(productName)){
                await product.click()
                this.page.on('dialog', async dialog =>{
                    await expect(dialog.message()).toContain('Product added');
                    await dialog.accept();
                });
                await this.page.locator(this.addToCardButton).click();
                break;
            }
        }
    }

    async gotoCart(){
        await this.page.goto("https://www.demoblaze.com/cart.html#")
    }

    async logout(){
        await this.logutOutButton.click();
        await expect(await this.page.locator("//a[@id='login2']")).toBeVisible();
    }
}