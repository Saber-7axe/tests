// tests/checkout.spec.js
const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CartPage } = require('../pages/CartPage');
const { InventoryPage } = require('../pages/InventoryPage'); 
const { LoginPage } = require('../pages/LoginPage');

test('Завершение покупки', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await cartPage.goToCheckout();
  await checkoutPage.fillInfo('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();
  await expect(await checkoutPage.getSuccessMessage()).toContain('Thank you for your order');
});