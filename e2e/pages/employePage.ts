import { Page } from "@playwright/test";

class PIMPage {
  constructor(private readonly page: Page) {}

  private readonly addEmployeeButton = this.page.getByRole("button", { name: "Add" });

  async addEmployee(name: string, position: string, email: string) {
    await this.addEmployeeButton.click();
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[name="position"]', position);
    await this.page.fill('input[name="email"]', email);
    await this.page.click('button[type="submit"]');
  }

  async searchEmployee(name: string) {
    await this.page.fill('input[placeholder="Search"]', name);
    await this.page.click('button[type="submit"]');
  }
}

export default PIMPage;
