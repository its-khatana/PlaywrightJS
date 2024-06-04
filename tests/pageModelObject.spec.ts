import { expect, test } from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";



test.beforeEach(async({page})=>{
    //Login
    const loginObject = new LoginPage(page);
    await loginObject.gotoLoginPage();
    await loginObject.login('testing939', 'testing939')
    await loginObject.verifyLoginSuccess();
});


test.afterEach(async({page})=>{
    //logout
    const logoutObject = new HomePage(page);
    await logoutObject.logout();
});

test('Test POM', async({page})=>{
    //Login
    // const loginObject = new LoginPage(page);
    // await loginObject.gotoLoginPage();
    // await loginObject.login('testing939', 'testing939')
    // await loginObject.verifyLoginSuccess();

    //Add Product to Cart from HomePage
    const homePageobject = new HomePage(page);
    await homePageobject.addProductToCart('Samsung galaxy s6');
    await homePageobject.gotoCart();
    
    //Verify product is added to Cart.
    const cartObject = new CartPage(page);
    await cartObject.verifyProductAdded("Samsung galaxy s6");
});