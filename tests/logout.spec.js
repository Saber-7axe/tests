const { test, expect } = require("@playwright/test");

test("Выход из аккаунта (logout)", async ({ page }) => {
  // Логинимся
  await page.goto("https://www.saucedemo.com/");
  await page.fill('input[name="user-name"]', "standard_user");
  await page.fill('input[name="password"]', "secret_sauce");
  await page.click('input[type="submit"]');

  // Убедимся, что вошли — видим список товаров
  await page.waitForSelector(".inventory_list");

  // Открываем меню
  await page.click("#react-burger-menu-btn");

  // Ждём появления кнопки Logout и кликаем по ней
  await page.waitForSelector("#logout_sidebar_link");
  await page.click("#logout_sidebar_link");

  // Проверяем, что нас перекинуло обратно на страницу логина
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page.locator('input[name="user-name"]')).toBeVisible();
});
