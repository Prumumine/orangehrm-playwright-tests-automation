import { Page } from "@playwright/test";

class TopMenuComponent {
  constructor(private readonly page: Page) {}

  private readonly topMenu = (menuName: string) =>
    this.page.getByRole("link", { name: menuName });

  private readonly userDropdown = this.page.locator(".oxd-userdropdown-name");
  private readonly logoutButton = this.page.getByRole("menuitem", { name: "Logout" });

  async selectTopMenuItem(menuItem: string) {
    await this.topMenu(menuItem).click();
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutButton.click();
  }
}

export default TopMenuComponent;
