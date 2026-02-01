// import { test, expect } from "@playwright/test";
// import LoginPage from "../../pages/loginPage";
// import DashboardPage from "../../pages/dashboardPage"; 


// // test("Login valide", async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.visit();

// //   // fournir des valeurs sûres (string)
// //   const dashboardPage: DashboardPage = await loginPage.login(
// //     process.env.VALID_USERNAME || "Admin",
// //     process.env.VALID_PASSWORD || "admin123"
// //   );

// //   const dashboardText = await dashboardPage.isDashboardVisible();
// //   expect(dashboardText).toContain("Dashboard");
// // });

// // test("Login invalide", async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.visit();

// //   // fournir des valeurs sûres (string)
// //   const dashboardPage: DashboardPage = await loginPage.login(
// //     process.env.VALID_USERNAME || "Admin",
// //     process.env.INVALID_PASSWORD || "admin@123"
// //   );

// //   const dashboardText = await dashboardPage.isDashboardVisible();
// //   expect(dashboardText).toContain("Dashboard");
// // });

// // test("Déconnexion après login valide", async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.visit();

// //   const dashboardPage: DashboardPage = await loginPage.login(
// //     process.env.VALID_USERNAME || "Admin",
// //     process.env.VALID_PASSWORD || "admin123"
// //   );

// //   // Vérifier que le Dashboard est visible
// //   await expect(page.locator("h6")).toHaveText("Dashboard");

// //   // Cliquer sur le menu utilisateur (icône profil en haut à droite)
// //   await page.locator(".oxd-userdropdown-name").click();

// //   // Cliquer sur "Logout"
// //   await page.getByRole("menuitem", { name: "Logout" }).click();

// //   // Vérifier qu'on est revenu sur la page de login
// //   await expect(page).toHaveURL(/auth\/login/);
// // });


// // test("Connexion avec utilisateur inexistant", async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.visit();

// //   // Tentative de login avec utilisateur inexistant
// //   await loginPage.login("UnknownUser", "admin123");

// //   // Vérifier qu'on reste sur la page de login
// //   await expect(page).toHaveURL(/auth\/login/);

// //   // Vérifier que le message d'erreur est bien affiché
// //   const errorMessage = page.locator(".oxd-alert-content-text");
// //   await expect(errorMessage).toHaveText("Invalid credentials");
// // });

// // test("Connexion avec champs vides", async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.visit();
// //   await loginPage.login("", "");
// //   await expect(page.locator(".oxd-input-group__message")).toContainText("Required");
// // });

// // test("Déconnexion puis navigation directe", async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.visit();
// //   const dashboardPage = await loginPage.login("Admin", "admin123");
// //   await dashboardPage.logout();

// //   // Essayer d'accéder directement au dashboard
// //   await page.goto("/dashboard");
// //   await expect(page).toHaveURL(/auth\/login/);
// // });

// test.describe("Connexion invalide", () => {

//   test("Mot de passe incorrect", async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.visit();

//     await loginPage.login("Admin", "wrongPassword");

//     await expect(page).toHaveURL(/auth\/login/);
//     await expect(page.locator(".oxd-alert-content-text"))
//       .toHaveText("Invalid credentials");
//   });

//   test("Utilisateur inexistant", async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.visit();

//     await loginPage.login("UnknownUser", "admin123");

//     await expect(page).toHaveURL(/auth\/login/);
//     await expect(page.locator(".oxd-alert-content-text"))
//       .toHaveText("Invalid credentials");
//   });

// });

