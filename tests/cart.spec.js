// tests/cart.spec.js
const { test, expect } = require('@playwright/test');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { LoginPage } = require('../pages/LoginPage');

test('Добавление товара в корзину', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await expect(await cartPage.countItems()).toBe(1);
});

test('Удаление товара из корзины', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await cartPage.removeItem();
  await expect(await cartPage.countItems()).toBe(0);
});