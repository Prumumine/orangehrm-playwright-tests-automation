import { Page } from "@playwright/test";

class AdminPage {
  constructor(private readonly page: Page) {}

  private readonly addUserButton = this.page.getByRole("button", { name: "Add" });
  private readonly searchBox = this.page.getByPlaceholder("Search");
  private readonly deleteButton = this.page.getByRole("button", { name: "Delete" });

  async addUser(username: string, email: string) {
    await this.addUserButton.click();
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="email"]', email);
    await this.page.click('button[type="submit"]');
  }

  async searchUser(username: string) {
    await this.searchBox.fill(username);
    await this.page.click('button[type="submit"]');
  }

  async deleteUser(username: string) {
    await this.searchUser(username);
    await this.deleteButton.click();
  }
}

export default AdminPage;
