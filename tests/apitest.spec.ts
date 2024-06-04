import {expect, test} from "@playwright/test"

// requyest fixtures.

test("Get User", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    await expect(response.status()).toBe(200);
});

test("Create User", async({request})=>{
    const response = await request.post("https://reqres.in/api/users", 
    {data:{
        "name": "rohit",
        "job": "sdet"
    }});
    expect(response.status()).toBe(201);
    expect(response.body).toHaveProperty('name')
});