import { Page, expect } from "@playwright/test";
import { EmployeeDetails } from "../testdata/orangeHrmInterfaces";

class AddEmployeePage {
  constructor(private readonly page: Page) {}

  private readonly firstNameTextBox = this.page.getByPlaceholder("First Name");
  private readonly lastNameTextBox = this.page.getByPlaceholder("Last Name");
  private readonly middleNameTextBox = this.page.getByPlaceholder("Middle Name");
  private readonly idTextBox = this.page.getByRole("textbox").nth(4);
  private readonly saveButton = this.page.getByRole("button", { name: "Save" });
  public readonly successMessage = this.page.getByText(/Successfully Saved/i);
  public readonly errorMessage = this.page.getByText(/Required/i);

  async addEmployee(employeeDetails: EmployeeDetails) {
    // Remplissage des noms
    await this.firstNameTextBox.fill(employeeDetails.firstName);
    await this.lastNameTextBox.fill(employeeDetails.lastName);
    await this.middleNameTextBox.fill(employeeDetails.middleName);
    if (employeeDetails.employeeId) 
      { await this.idTextBox.fill(String(employeeDetails.employeeId)); 

      }
    

    // Vérification du champ Employee Id


    // if (currentValue && currentValue.trim() !== "") {
    //   console.log(`Employee Id auto-incrément détecté: ${currentValue}`);
    // } else {
    //   const fallbackId = employeeDetails.employeeId ?? "0405";
    //   await this.idTextBox.fill(fallbackId);
    //   console.log(`Employee Id ajouté manuellement: ${fallbackId}`);
    // }

    // // Sauvegarde
    await this.saveButton.click();
  }
}

export default AddEmployeePage;
