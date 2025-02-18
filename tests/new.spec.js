const { test, expect } = require("@playwright/test");
const exp = require("constants");
const { afterEach } = require("node:test");

test("assertion", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await expect(page).toHaveURL("https://www.amazon.in/");

  await expect(page).toHaveTitle(
    "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
  );

  const logo = await page.locator("//a[@id='nav-logo-sprites']");
  await expect(logo).toBeVisible();



  const fill = await page.locator("//input[@id='twotabsearchtextbox']");
  await fill.fill("shooes");
  await expect(fill).toHaveValue("shooes");

 const text = await page.locator("//a[contains(@href,'/gp/bestsellers/?ref_=nav_cs_bestsellers')]")

 await expect(text).toContainText("Best")

 await expect(page.locator("//div[@id='nav-xshop']/descendant::a")).toHaveCount(32)


});
