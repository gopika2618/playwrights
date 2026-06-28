//?senario1
// import {test,chromium, expect} from "@playwright/test"
// test("amazon",async({page})=>{
//     await page.setViewportSize({width:1366,height:768});
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(2000);
//     await page.locator('[placeholder="Search Amazon.in"]').fill("laptop");
//     let a=await page.locator('[placeholder="Search Amazon.in"]').textContent();
//     await page.keyboard.press("Enter");
//     await page.waitForTimeout(2000);
//     await page.goBack();
//     await page.waitForTimeout(2000);
//     console.log(a);
//     await expect(a).toBe("laptop");
//     await page.waitForTimeout(2000);
// })

//!output:----->Error
    // Expected: "laptop"
    // Received: ""
    // Error: expect(received).toBe(expected)


    //?senario2
// import {test} from '@playwright/test'
// test("test2",async({page})=>{
//     await page.setViewportSize({width:1366,height:780})
//     await page.goto('https://demowebshop.tricentis.com/')
//     await page.locator('//ul[@class="top-menu"]/li[5]/a').click()
//     await page.waitForTimeout(2000)
//     await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]').click()  //(//h2[@class="product-title"])[2]/a
//     await page.waitForTimeout(2000)
//     let a=await page.locator('//span[@class="cart-qty"]').textContent()
//     if(a=="(1)"){
//         console.log("count is increased")
//     }else{
//         console.log("not increased")
//     }
//     await page.waitForTimeout(2000)
//     await page.locator('(//span[@class="cart-label"])[1]').click()
//     let c=await page.locator('(//input[@type="text"])[2]').fill("3")
//     await page.waitForTimeout(2000)
//     await page.keyboard.press("Enter")
//     let b=await page.locator('(//strong)[4]').textContent()
//     if(b==="30"){
//         console.log("Price was changed to 30")
//     }else{
//         console.log("Price was changed to 30")
//    }
// })
 //!output
//  Running 1 test using 1 worker
// [chromium] › tests\assessment\task1.spec.js:89:5 › test2
// count is increased
// Not changed to 30
//   1 passed (13.3s)

// To open last HTML report run:

//   npx playwright show-report

// //?senario3
import { test, expect } from '@playwright/test';
test('Blinkit', async ({ page }) => {
    await page.goto('https://blinkit.com/');
    await page.waitForLoadState('networkidle');
    const searchBox = page.locator('input[type="text"]');
    await searchBox.fill('Chocolate');
    await searchBox.clear();
    await expect(searchBox).toHaveValue('');
    let a=await page.locator('input[type="text"]').fill('Juice');
    const searchValue = await searchBox.inputValue();
    console.log('Captured Value:', searchValue);
    expect(searchValue).toBe('Juice');
    console.log('Assertion Passed: Value is Juice');
});

//!output
// Captured Value: Juice
// Assertion Passed: Value is Juice
//   1 passed (5.9s)

// To open last HTML report run:

//   npx playwright show-report

// ?senario4
// import {test,expect} from '@playwright/test'
// import path from 'node:path'
// test("test4",async({page})=>{
//     await page.goto('https://blinkit.com/')
//     await page.locator('//div[@class="SearchBar__PlaceholderContainer-sc-16lps2d-0 dPbxWD"]').click()
//     await page.locator('//input[@placeholder="Search for atta dal and more"]').fill('pancake')
//     await page.keyboard.press("Control+A")
//     await page.keyboard.press("Control+X")
//     let a=await page.locator('//input[@placeholder="Search for atta dal and more"]').textContent()
//     console.log(a)
//     await page.keyboard.press("Control+V")
//     let b=await page.locator('//input[@placeholder="Search for atta dal and more"]').textContent()
//     console.log(b)
//     await page.screenshot({path:'screenshots/blinkit.png'})
//     await page.keyboard.press("Enter")
//     await page.locator('(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[4]').click()
//     await page.waitForTimeout(2000)
//     await page.locator('(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[10]').click()
//     let c=await page.locator('(//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"])[1]').allTextContents()
//     console.log(c)
//     if(c=='2 items'){
//         console.log("Items has been inceased")
//     }
//     else{
//         console.log("not increased")
//     }
//     await page.waitForTimeout(2000);
//     let d=await page.locator('//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][2]').textContent()
//     console.log(d)
// })

//!output
// Running 1 test using 1 worker
// [chromium] › tests\assessment\task1.spec.js:313:5 › test4


// [ '2 items' ]
// Items has been inceased
//  ₹382
//   1 passed (25.8s)

// To open last HTML report run:

//   npx playwright show-report

// ?senario5
// import {test,chromium, expect} from "@playwright/test"
// test("amazon",async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator('[class="submit-button btn_action"]').click();
//     let c=await page.getByTestId("error").textContent();
//     console.log(c);
//     await expect(c).toBe("Epic sadface: Username is required");
//     await expect(c.length).toBeGreaterThan(5);
//     await page.locator('[placeholder="Username"]').fill("performance_glitch_user");
//     await page.locator('[placeholder="Password"]').fill("secret_sauce")
//     await page.locator('[class="submit-button btn_action"]').click();
//     await page.locator('(//button[@class="btn btn_primary btn_small btn_inventory "])[4]').click()


//     })

// !output
// Epic sadface: Username is required
//   1 passed (9.0s)

// To open last HTML report run:

//   npx playwright show-report












