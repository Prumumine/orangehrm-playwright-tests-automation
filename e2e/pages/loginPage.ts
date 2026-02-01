import { Page } from "@playwright/test";
import DashboardPage from "./dashboardPage";

class LoginPage {
  constructor(private readonly page: Page) {}

  private readonly userNameTextBox = this.page.getByPlaceholder("Username");
  private readonly passwordTextBox = this.page.getByPlaceholder("Password");
  private readonly loginButton = this.page.getByRole("button", { name: "Login" });

  async visit() {
    // utilise la baseURL définie dans playwright.config.ts
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }
}

export default LoginPage;
