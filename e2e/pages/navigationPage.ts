import { Page } from "@playwright/test";
import LeftMenuComponent from "./components/leftMenuComponent";
import TopMenuComponent from "./components/topMenuComponent";

class NavigationPage {
  private readonly leftMenu: LeftMenuComponent;
  private readonly topMenu: TopMenuComponent;

  constructor(private readonly page: Page) {
    this.leftMenu = new LeftMenuComponent(page);
    this.topMenu = new TopMenuComponent(page);
  }

  // --- Méthodes Left Menu ---
  async goToPIM() {
    await this.leftMenu.selectLeftMenuItem("PIM");
  }

  async goToTime() {
    await this.leftMenu.selectLeftMenuItem("Time");
  }

  async goToRecruitment() {
    await this.leftMenu.selectLeftMenuItem("Recruitment");
  }

  async goToLeave() {
    await this.leftMenu.selectLeftMenuItem("Leave");
  }

  async goToDashboard() {
    await this.leftMenu.selectLeftMenuItem("Dashboard");
  }

  // --- Méthodes Top Menu ---
  async selectTopMenuItem(menuItem: string) {
    await this.topMenu.selectTopMenuItem(menuItem);
  }

  async logout() {
    await this.topMenu.logout();
  }
}

export default NavigationPage;
