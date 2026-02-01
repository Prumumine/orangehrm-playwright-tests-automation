import { Page } from "@playwright/test";

class LeavePage {
  constructor(private readonly page: Page) {}

  private readonly requestLeaveButton = this.page.getByRole("button", { name: "Apply" });

  async requestLeave(startDate: string, endDate: string) {
    await this.requestLeaveButton.click();
    await this.page.fill('input[name="startDate"]', startDate);
    await this.page.fill('input[name="endDate"]', endDate);
    await this.page.click('button[type="submit"]');
  }

  async cancelLeave() {
    await this.page.click('button[name="Cancel"]');
  }
}

export default LeavePage;
