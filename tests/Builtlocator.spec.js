const { test, expect } = require("@playwright/test");
const { log } = require("console");

test.skip("builtin-locator", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin")
  
  await page.getByPlaceholder("Password").fill("admin123")

  await page.getByRole("button",{type:"submit"}).click()

  const text = await page.getByText("manda user")
  await expect(text).toHaveText("manda user")

  await expect( page.getByTitle("OrangeHRM").nth(0)).toBeVisible() 

  getbylabel 
  getbytestID



});  



test('built-in ', async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")






})
