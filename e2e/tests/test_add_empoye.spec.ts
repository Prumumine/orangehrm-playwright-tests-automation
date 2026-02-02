import { test, expect } from '@playwright/test';

test('Ajout d’un employé OrangeHRM', async ({ page }) => {
  // Connexion
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigation vers Add Employee
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  // Remplissage des champs
  await page.getByRole('textbox', { name: 'First Name' }).fill('Diallo');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Mariam');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Ani');

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
