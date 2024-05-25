import { expect, test } from "@playwright/test";

//Types of Alerts
//1. Accept (Alert with OK)
//2. Dismiss
//3. Promt - Alert with Input Field.


// Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.

// By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

// page.on('dialog', dialog => dialog.accept());
// await page.getByRole('button').click();


test('Alert With Ok', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle('Automation Testing Practice')

    //Enabling Alert Handler
    page.on('dialog', async dialog =>{
        await expect(dialog.type()).toContain('alert')
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });
    // V.V.V.Imp - We need to write above code before trigging the alert box.
    await page.locator("//button[normalize-space()='Alert']").click() // It will trigger the alert Box.

});



test('Alert Box with OK and Cancel (Choose OK)', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle('Automation Testing Practice')

    //Enabling Alert Handler
    page.on('dialog', async dialog =>{
        console.log(dialog.type())
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    });
    // V.V.V.Imp - We need to write above code before trigging the alert box.
    await page.locator("//button[normalize-space()='Confirm Box']").click() // It will trigger the alert Box.
});



test('(Confirm Alert (OK/Cancel)) Alert Box with OK and Cancel (Choose Cancel)', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle('Automation Testing Practice')

    //Enabling Alert Handler
    page.on('dialog', async dialog =>{
        await expect(dialog.type()).toContain('confirm')
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.dismiss();
    });
    // V.V.V.Imp - We need to write above code before trigging the alert box.
    await page.locator("//button[normalize-space()='Confirm Box']").click() // It will trigger the alert Box.
});



test('Prompt Dialog Box', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle('Automation Testing Practice')

    //Enabling Alert Handler
    page.on('dialog', async dialog =>{
        await expect(dialog.type()).toContain('prompt')
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toBe('Harry Potter')
        await dialog.accept('John Cena!'); // This is how we pass value to prompt.
    });
    // V.V.V.Imp - We need to write above code before trigging the alert box.
    await page.locator("//button[normalize-space()='Prompt']").click() // It will trigger the alert Box.
});