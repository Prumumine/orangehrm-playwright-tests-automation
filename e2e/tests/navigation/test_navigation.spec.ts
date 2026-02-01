import { test, expect } from "@playwright/test";
import NavigationPage from "../../pages/navigationPage";
import LoginPage from "../../pages/loginPage";

test.describe("Navigation / UI", () => {

 test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  const dashboardPage = await loginPage.login(
    process.env.VALID_USERNAME || "Admin",
    process.env.VALID_PASSWORD || "admin123"
  );
  await expect(page).toHaveURL(/dashboard\/index/);
  await expect(page.locator("h6.oxd-text--h6")).toContainText("Dashboard");
});

  test("Navigation entre modules", async ({ page }) => {
    const navPage = new NavigationPage(page);

    await navPage.goToPIM();
    await navPage.goToTime();
    await navPage.goToRecruitment();
  });

  test("Vérification menus déroulants et boutons", async ({ page }) => {
    const navPage = new NavigationPage(page);

    await navPage.openUserMenu();
    await navPage.assertLogoutVisible();
    await navPage.assertDashboardButtonAccessible();
  });

});

// ⚠️ Ce test est hors authentification
test.describe("Navigation hors authentification", () => {

  test("Tentative de navigation directe sur pages admin sans login", async ({ page }) => {
    // Aller directement sur une page protégée sans login
    await page.goto("/pim/viewPimModule");

    // Vérifier redirection vers login
    await expect(page).toHaveURL(/auth\/login/);
    await expect(page.locator('input[placeholder="Username"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
  });

});
