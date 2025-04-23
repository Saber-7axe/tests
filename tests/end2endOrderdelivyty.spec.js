const { test, expect } = require("@playwright/test");

test("Проверка оформления заказа: заполнение данных, выбор способа доставки и оплата", async ({
  page,
}) => {
  // Открываем страницу
  await page.goto("https://www.saucedemo.com/");

  // Вводим логин и пароль
  await page.fill('input[name="user-name"]', "standard_user");
  await page.fill('input[name="password"]', "secret_sauce");
  await page.click('input[type="submit"]');

  // Ожидаем загрузки страницы
  await page.waitForSelector(".inventory_list");

  // Добавляем товар в корзину
  await page.click(".inventory_item:nth-child(1) .btn_inventory"); // Кликаем на первый товар

  // Переходим в корзину
  await page.click(".shopping_cart_link");

  // Проверяем, что товар в корзине
  const cartItems = await page.locator(".cart_item");
  const itemCount = await cartItems.count();
  expect(itemCount).toBe(1); // Проверяем, что в корзине один товар

  // Переходим к оформлению заказа
  await page.click(".checkout_button");

  // Заполняем данные для оформления
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Doe");
  await page.fill("#postal-code", "12345");
  await page.click(".btn_primary");

  // Проверяем, что мы на странице с подтверждением
  const confirmationHeader = await page.locator(".title");
  await expect(confirmationHeader).toHaveText("Checkout: Overview");

  // Выбираем способ доставки и подтверждаем покупку
  await page.click(".cart_button"); // Подтверждаем заказ

  // Проверяем, что заказ успешно оформлен
  const orderConfirmation = await page.locator(".complete-header");
  await expect(orderConfirmation).toHaveText("THANK YOU FOR YOUR ORDER");
});
