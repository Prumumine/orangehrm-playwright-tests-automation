import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('FANDIE');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('M');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Michel');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Y');
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Yombisse');
  await page.locator('div').filter({ hasText: /^Employee Id$/ }).nth(1).click();
  await page.getByRole('textbox').nth(4).fill('0398');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/195');
});