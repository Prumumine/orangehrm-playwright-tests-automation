import { Page } from "@playwright/test";

class DashboardPage {
  constructor(private readonly page: Page) {}

  private readonly dashboardTitle = this.page.locator("h6");

  async isDashboardVisible() {
    return await this.dashboardTitle.textContent();
  }
  async logout() { 
    await this.page.locator(".oxd-userdropdown-name").click(); 
    await this.page.getByRole("menuitem", { name: "Logout" }).click(); 
  }
}

export default DashboardPage;
