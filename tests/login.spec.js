// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const VALID_USER = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

test('Успешная авторизация', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('Неверный пароль', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(VALID_USER, 'wrong_password');
  await expect(await loginPage.getErrorMessage()).toContain('Username and password do not match');
});