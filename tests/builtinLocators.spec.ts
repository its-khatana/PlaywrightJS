import {test, expect} from "@playwright/test";

// InBuild Locators

// These are the recommended built in locators.

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


test("testing built in locators", async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link', {name: 'Log In'}).click()  // https://www.w3.org/TR/html-aria/#docconformance [Supports 60 plus Roles]
    await page.getByRole('button', {name: 'Log in'}).click()
    await page.waitForTimeout(3000);

    //V. Note - We recommend using text locators to find non interactive elements like div, span, p, etc. For interactive elements like button, a, input, etc. use role locators.
});

test("get By Alt text", async({page})=>{
    await page.goto("https://playwright.dev/docs/locators#locate-by-text");
    const locators=await page.getByAltText('Playwright logo', {exact: true}).all();
    await locators[0].click();
    await expect(page).toHaveURL("https://playwright.dev/", {timeout: 10000})
});


test("get by text (Prefferd for non-interactive text elements)", async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.getByText("Home").click();  // Note: Preffed for non intereactive text elements (div, span)
});


test.only("Get by Placeholder", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', {name: ' Login '}).click()
});