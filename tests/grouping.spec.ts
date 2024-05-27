import { expect, test } from "@playwright/test";

test.describe("Group 1", ()=>{
    test.beforeAll(async ()=>{
        console.log("Before all: Group 1")
    })
    test('Test 1', async({page})=>{
        console.log("This is Test 1");
    });
    
    
    test('Test 2', async({page})=>{
        console.log("This is Test 2");
    });    
});


test.describe.only("Group 2", ()=>{
    test('Test 3', async({page})=>{
        console.log("This is Test 3");
    });
    
    
    test('Test 4', async({page})=>{
        console.log("This is Test 3");
    });
});
