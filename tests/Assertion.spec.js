const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Assertion", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await expect(page).toHaveURL("https://www.amazon.in/");

  await expect(page).toHaveTitle(
    "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
  );

  const mtext = await page.locator("//a[text()='Mobiles']")
  await expect(mtext).toContainText("Mob") 
 
 
  const img = await page.locator("//a[@id='nav-logo-sprites']")
  await expect(img).toBeVisible()


  const search = await page.locator("//input[@id='twotabsearchtextbox']");
  search.fill("shoe");
  await expect(search).toHaveValue("shoe");  
  await expect(search).toBeEnabled()
//   await expect(search).toBeDisabled() 

const countofele = await page.locator("//div[@id='nav-xshop']//a")
await expect(countofele).toHaveCount(32)

});


test.skip("checkbox",async({page})=>{


    await page.goto("https://demoqa.com/checkbox") 

   await expect(page.locator("//span[@class='rct-checkbox']//*[name()='svg']")).not.toBeChecked()



}) 
