// Tags - Tag is used to filtering the tests in report of a specific tag or to run test using specific tags

import {expect, test} from "@playwright/test";

// There are 2 ways to tag test.

// 1. First way
// Inside the title , use @tagName
test('Test1 @sanity', async ({page}) => {
    console.log("I am test1");
});


test('test2 @sanity', async({page})=>{
   console.log("I am test2"); 
});


//2. Second way.
test('test3', {tag: '@sanity'},async({page})=>{
    console.log("I am test3"); 
 });


 test('test4', {tag: '@sanity'},async({page})=>{
    console.log("I am test4"); 
 });


 test('test5', {tag: '@regression'},async({page})=>{
    console.log("I am test5"); 
 });


 test('test6', {tag: ['@regression', '@sanity']},async({page})=>{ // Can tag multiple tags.
    console.log("I am test6"); 
 });



 //Commands -  grep & grep-invert
//  1. npx playwright test tests/tagging.spec.ts --grep-invert @sanity --project chromium --headed - it will run all the testcases except the tests with tag '@sanity'
//  2. npx playwright test tests/tagging.spec.ts --grep @sanity --project chromium --headed - it will run only those testcases which have tag '@sanity'

