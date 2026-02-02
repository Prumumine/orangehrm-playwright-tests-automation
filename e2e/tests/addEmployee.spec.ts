import { test, expect } from "@playwright/test";
import { Env } from "../frameworkConfig/env";
import LoginPage from "../pages/loginPage";
import AddEmployeePage from "../pages/addEmployeePage";
import { getRandomEmployeeDetails } from "../testdata/random";

test("Ajout d’un employé avec Employee Id du formulaire", async ({ page }) => {
  await page.goto(Env.BASE_URL);

  const loginPage = new LoginPage(page);
  const homePage = await loginPage.login(Env.USERNAME, Env.PASSWORD);

  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  const addEmployeePage = new AddEmployeePage(page);

  // Génération aléatoire des noms
  const employeeDetails = getRandomEmployeeDetails();

  // Récupération de l’Employee Id déjà présent dans le formulaire
  const idTextBox = page.getByRole("textbox").nth(4);
  const currentValue = await idTextBox.inputValue();

  if (currentValue && currentValue.trim() !== "") {
    employeeDetails.employeeId = currentValue; // on garde celui du formulaire
    console.log(`Employee Id récupéré du formulaire: ${currentValue}`);
  } else {
    employeeDetails.employeeId = "0405"; // fallback manuel
    console.log("Employee Id ajouté manuellement: 0405");
  }

  // Ajout de l’employé
  await addEmployeePage.addEmployee(employeeDetails);

  // Vérification du succès
  await expect(addEmployeePage.successMessage).toBeVisible();
});
