import { test, expect } from "@playwright/test"
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import { Env } from "../frameworkConfig/env";

test.describe("Authentification OrangeHRM", () => {

  test("Login valide", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();

    const homePage: HomePage = await loginPage.login(
      Env.USERNAME,
      Env.PASSWORD      
    );

    // Vérifier qu'on est bien sur le Dashboard
    await expect(page.locator("h6")).toContainText("Dashboard");
  });

  test("Login invalide - mot de passe incorrect", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();

    await loginPage.login("Admin", "wrongPassword");test("Login invalide - utilisateur inexistant", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();

    await loginPage.login("UnknownUser", "admin123");

    await expect(page).toHaveURL(/auth\/login/);
    await expect(page.locator(".oxd-alert-content-text"))
      .toHaveText("Invalid credentials");
  });


    await expect(page).toHaveURL(/auth\/login/);
    await expect(page.locator(".oxd-alert-content-text"))
      .toHaveText("Invalid credentials");
  });

  test("Login invalide - utilisateur inexistant", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();

  await loginPage.login(Env.UNKNOWN_USER, Env.PASSWORD);

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.locator(".oxd-alert-content-text"))
    .toHaveText("Invalid credentials");
});

  test("Connexion avec champs vides", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();

    await loginPage.login("", "");

    await expect(page.locator(".oxd-input-group__message"))
      .toContainText("Required");
  });

  test("Déconnexion après login valide", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();

    const homePage: HomePage = await loginPage.login(
      process.env.VALID_USERNAME || "Admin",
      process.env.VALID_PASSWORD || "admin123"
    );

    await expect(page.locator("h6")).toContainText("Dashboard");

    // Déconnexion via TopMenuComponent
    await homePage.getTopMenuComponent().logout();

    await expect(page).toHaveURL(/auth\/login/);
  });

  test("Déconnexion puis navigation directe", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();

    const homePage: HomePage = await loginPage.login("Admin", "admin123");

    await homePage.getTopMenuComponent().logout();

    // Essayer d'accéder directement au dashboard après logout
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/auth\/login/);
  });

});
