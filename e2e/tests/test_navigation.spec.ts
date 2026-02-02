import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import NavigationPage from "../pages/navigationPage";

test("Navigation optimisée", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.login("Admin", "admin123");

  const navPage = new NavigationPage(page);

  // Left menu
  await navPage.goToPIM();
  await navPage.goToRecruitment();
  await navPage.goToDashboard();

  // Top menu
  await navPage.selectTopMenuItem("Add Employee");
  await navPage.logout();
});
