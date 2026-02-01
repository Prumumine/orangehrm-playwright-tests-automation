import { Page, expect } from "@playwright/test";

export default class NavigationPage {
  constructor(private readonly page: Page) {}

async goToPIM() {
  const pimLink = this.page.locator('a[href="/web/index.php/pim/viewEmployeeList"]');
  await pimLink.waitFor({ state: "visible" });
  await pimLink.click();
  await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  // Vérifier qu'on est bien sur la page PIM
  await expect(this.page.locator("h6")).toHaveText("PIM");
}

async goToTime() {
  const timeLink = this.page.locator('a[href="/web/index.php/time/viewEmployeeTimesheet"]');
  await timeLink.waitFor({ state: "visible" });
  await timeLink.click();
  await expect(this.page).toHaveURL(/time\/viewEmployeeTimesheet/);
  await expect(this.page.locator("h6")).toHaveText("Time/Timesheets");
}

async goToRecruitment() {
  const recruitmentLink = this.page.locator('a[href="/web/index.php/recruitment/viewCandidates"]');
  await recruitmentLink.waitFor({ state: "visible" });
  await recruitmentLink.click();
  await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
  await expect(this.page.locator("h6")).toHaveText("Recruitment");
}

  async openUserMenu() {
    await this.page.locator(".oxd-userdropdown-name").click();
  }

  async assertLogoutVisible() {
    await expect(this.page.getByRole("menuitem", { name: "Logout" })).toBeVisible();
  }

  async assertDashboardButtonAccessible() {
    const dashboardButton = this.page.getByRole("link", { name: "Dashboard" });
    await expect(dashboardButton).toBeVisible();
    await expect(dashboardButton).toBeEnabled();
  }
}
