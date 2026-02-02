import { test, expect } from "@playwright/test";
import { Env } from "../frameworkConfig/env";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage"; // expose LeftMenuComponent et TopMenuComponent
import { getRandomEmployeeDetails } from "../testdata/random";

test("Ajout d’un employé OrangeHRM", async ({ page }) => {
  // Connexion via LoginPage
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  const homePage = await loginPage.login(Env.USERNAME, Env.PASSWORD);

  // Navigation : LeftMenu → PIM, puis TopMenu → Add Employee
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
//  // Remplissage des champs
//   await page.getByRole('textbox', { name: 'First Name' }).fill('Diallo');
//   await page.getByRole('textbox', { name: 'Middle Name' }).fill('Mariam');
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('Ani');

// --- Remplissage des champs avec getRandomEmployeeDetails --- 
const employeeDetails = getRandomEmployeeDetails(); 
await page.getByRole("textbox", { name: "First Name" }).fill(employeeDetails.firstName); 
await page.getByRole("textbox", { name: "Middle Name" }).fill(employeeDetails.middleName); 
await page.getByRole("textbox", { name: "Last Name" }).fill(employeeDetails.lastName);

  // Vérification du champ Employee Id
  const idTextBox = page.getByRole('textbox').nth(4);
  const currentValue = await idTextBox.inputValue();

  if (currentValue && currentValue.trim() !== '') {
    // Champ déjà prérempli → on garde la valeur
    console.log(`Employee Id déjà présent: ${currentValue}`);
  } else {
    // Champ vide → on remplit manuellement
    await idTextBox.fill('0400');
    console.log('Employee Id ajouté manuellement: 0400');
  }

  // Sauvegarde
  await page.getByRole('button', { name: 'Save' }).click();

  // Vérification du succès
  await expect(page.getByText(/Successfully Saved/i)).toBeVisible();
});