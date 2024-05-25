import { expect, test } from "@playwright/test";


//Annotations: 
// 1) test.only() - only this test will run.
// test.only('Test 1', async ({page})=>{
//     console.log("This is test 1");
// });


// 2. test.skip() - will skip this test
// test.skip('Test 2', async ({page})=>{
//     console.log("This is test 2");
// });

// Skip using specific condition.
test('Test 3', async ({page, browserName})=>{ // page and browserName are the fixtures.
    console.log(browserName)
    if(browserName === 'chromium'){
        test.skip()
    }
    console.log("This is test 3");
});


//3. test.fixme -- Same as skip, it is used when some scenarios are failing because of aut issue or until bug is fixed. (Known Issue).
test.fixme('Test 4', async({page})=>{
    console.log("Test 4")
});


//4. This test should fail, incase it is passed, then in report , it will marked as failed.
test.fail('Test 5', async({page})=>{
    console.log("Test 5");
});


// With the help of condition also, we can use test.fail()
test('Test 6', async ({page, browserName})=>{ // page and browserName are the fixtures.
    console.log(browserName)
    if(browserName === 'chromium'){
        test.fail()
    }
    console.log("This is test 6");
});


//5. test.slow() - if by default, timeout is 10 sec, but if the action performed takes longer than that. 
// then time.slow() , will multiply the timeout time by 3 times.
test('Test 7', async ({page}) =>{
    test.slow() // Increases the time by 3 times.
    await page.goto("http://app.aks-cicd-22959.cicd.cnvrg.me/users/sign_in")
    const xpath = await page.locator("//input[@placeholder='Hello']");
    await xpath.fill("Hello"); // this action will take 90 seconds to fail. Reason, by default, this action takes 30 seconds to find the locator
    // but , we have used test.slow(), which will wait for thrice the time as that of default. 
    // Note: await xpath.fill("Hello", {timeout: 5000}) -- it will wait for 5 seconds only, when mentioned explicitly timeout, it takes priority.
});