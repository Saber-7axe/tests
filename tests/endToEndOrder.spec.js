// tests/saucedemo/endToEndOrder.spec.js
import { test, expect } from "@playwright/test";

test("Полный путь: от логина до покупки", async ({ page }) => {
  // 1. Заход на сайт
  await page.goto("https://www.saucedemo.com/");

  // 2. Логин
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // 3. Добавление товара
  await page.click("text=Add to cart", { strict: false });
  await page.click(".shopping_cart_link");

  // 4. Переход в корзину
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await page.click("text=Checkout");

  // 5. Заполнение формы
  await page.fill("#first-name", "Иван");
  await page.fill("#last-name", "Иванов");
  await page.fill("#postal-code", "123456");
  await page.click('input[type="submit"]');

  // 6. Проверка страницы перед завершением
  await expect(page).toHaveURL(/.*checkout-step-two/);
  await page.click("text=Finish");

  // 7. Проверка успешного заказа
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );
});
