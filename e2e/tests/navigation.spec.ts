import { test, expect } from "@playwright/test";
import { Env } from "../frameworkConfig/env";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage"; // supposons que ce composant expose LeftMenuComponent

test("Navigation principale OrangeHRM via Page Objects", async ({ page }) => {
  // Connexion via LoginPage
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  const homePage = await loginPage.login(Env.USERNAME, Env.PASSWORD);

  // Navigation via LeftMenuComponent
  const leftMenu = homePage.getLeftMenuComponent();

  await leftMenu.selectLeftMenuItem("Admin");
  await leftMenu.selectLeftMenuItem("PIM");
  await leftMenu.selectLeftMenuItem("Leave");
  await leftMenu.selectLeftMenuItem("Time");
  await leftMenu.selectLeftMenuItem("Recruitment");
  await leftMenu.selectLeftMenuItem("My Info");
  await leftMenu.selectLeftMenuItem("Performance");
  await leftMenu.selectLeftMenuItem("Directory");
  await leftMenu.selectLeftMenuItem("Claim");
  await leftMenu.selectLeftMenuItem("Buzz");
  await leftMenu.selectLeftMenuItem("Dashboard");

  // Vérification finale : on est bien sur le Dashboard
  await expect(page).toHaveURL(/dashboard/);
});
