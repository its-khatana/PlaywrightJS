import { expect, type Page } from "@playwright/test";


export class CartPage{
    readonly page: Page
    productCart: string
    constructor(page){
        this.page = page;
        this.productCart = "//td[normalize-space()='']"
    }

    async verifyProductAdded(product){
        const productInCart= this.productCart.replace("''", `'${product}'`);
        console.log(productInCart)
        await expect(this.page.locator(productInCart)).toBeVisible()
    }
}
