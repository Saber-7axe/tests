const { test, expect } = require('@playwright/test');

test('Сортировка товаров по цене: от дешевого к дорогому', async ({ page }) => {
  // Логинимся
  await page.goto('https://www.saucedemo.com/');
  await page.fill('input[name="user-name"]', 'standard_user');
  await page.fill('input[name="password"]', 'secret_sauce');
  await page.click('input[type="submit"]');

  // Убедимся, что мы на главной странице с товарами
  await page.waitForSelector('.inventory_list');

  // Выбираем сортировку по цене (низкая -> высокая)
  await page.selectOption('.product_sort_container', 'lohi');

  // Собираем список цен
  const prices = await page.$$eval('.inventory_item_price', elements =>
    elements.map(el => parseFloat(el.textContent.replace('$', '')))
  );

  // Проверяем, что список отсортирован по возрастанию
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});
