import { test, expect } from "@playwright/test";

test.describe("PIM – Gestion des employés", () => {

  test("Ajouter un employé avec toutes les infos", async ({ page }) => {
    // Connexion
    await page.goto("/");
    await page.fill('input[placeholder="Username"]', "Admin");
    await page.fill('input[placeholder="Password"]', "admin123");
    await page.click('button[type="submit"]');

    // Aller dans PIM
    await page.click('a[href="/web/index.php/pim/viewPimModule"]');

    // Ajouter un employé
    await page.click('button:has-text("Add")');
    await page.fill('input[name="firstName"]', "John");
    await page.fill('input[name="lastName"]', "Doe");
    await page.fill('input[name="employeeId"]', "12345");
    await page.click('button:has-text("Save")');

    // Vérifier création
    await expect(page.locator("h6")).toHaveText("Personal Details");
  });

  test("Ajouter un employé avec champs manquants", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[placeholder="Username"]', "Admin");
    await page.fill('input[placeholder="Password"]', "admin123");
    await page.click('button[type="submit"]');

    await page.click('a[href="/web/index.php/pim/viewPimModule"]');
    await page.click('button:has-text("Add")');

    // Ne pas remplir les champs obligatoires
    await page.click('button:has-text("Save")');

    // Vérifier message d’erreur
    await expect(page.locator(".oxd-input-group__message").first())
      .toHaveText("Required");
  });

  test("Modifier informations personnelles", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[placeholder="Username"]', "Admin");
    await page.fill('input[placeholder="Password"]', "admin123");
    await page.click('button[type="submit"]');

    await page.click('a[href="/web/index.php/pim/viewPimModule"]');

    // Rechercher un employé existant
    await page.fill('input[placeholder="Employee Name"]', "John Doe");
    await page.click('button:has-text("Search")');

    // Cliquer sur l’employé
    await page.click('a:has-text("John Doe")');

    // Modifier info
    await page.fill('input[name="middleName"]', "Michael");
    await page.click('button:has-text("Save")');

    // Vérifier mise à jour
    await expect(page.locator('input[name="middleName"]')).toHaveValue("Michael");
  });

  test("Supprimer un employé", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[placeholder="Username"]', "Admin");
    await page.fill('input[placeholder="Password"]', "admin123");
    await page.click('button[type="submit"]');

    await page.click('a[href="/web/index.php/pim/viewPimModule"]');

    // Rechercher l’employé
    await page.fill('input[placeholder="Employee Name"]', "John Doe");
    await page.click('button:has-text("Search")');

    // Supprimer
    await page.click('i.oxd-icon.bi-trash'); // icône poubelle
    await page.click('button:has-text("Yes, Delete")');

    // Vérifier feedback
    await expect(page.locator(".oxd-toast-content")).toContainText("Successfully Deleted");
  });

  test("Rechercher un employé avec filtres", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[placeholder="Username"]', "Admin");
    await page.fill('input[placeholder="Password"]', "admin123");
    await page.click('button[type="submit"]');

    await page.click('a[href="/web/index.php/pim/viewPimModule"]');

    // Utiliser filtres
    await page.fill('input[placeholder="Employee Name"]', "John Doe");
    await page.fill('input[placeholder="Employee Id"]', "12345");
    await page.click('button:has-text("Search")');

    // Vérifier résultats
    await expect(page.locator("div.oxd-table-card")).toContainText("John Doe");
  });

});
