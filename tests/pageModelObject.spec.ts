import { expect, test } from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";


test('Test POM', async({page})=>{
    //Login
    const loginObject = new LoginPage(page);
    await loginObject.gotoLoginPage();
    await loginObject.login('testing939', 'testing939')
    await loginObject.verifyLoginSuccess();
});