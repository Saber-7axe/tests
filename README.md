
## Автоматические тесты для https://www.saucedemo.com

### Установка

```bash
git clone https://github.com/Saber-7axe/tests.git
cd tests
npm install
npx playwright install
```

### Запуск тестов

```bash
npx playwright test
```

### Запуск отдельного теста

```bash
npx playwright test tests/имя_файла.spec.js
```

### Список тестов

#### login.spec.js
Авторизация пользователя

#### cart.spec.js
Добавление товаров в корзину

#### checkout.spec.js
Заполнение формы оформления заказа

#### endToEndOrder.spec.js
Полный заказ: логин → корзина → оформление

#### end2endOrderdelivyty.spec.js
Заказ с учётом доставки (возможно переименовать)

#### logout.spec.js
Проверка выхода из аккаунта

#### testAtoZ.spec.js
Сортировка товаров по названию (A → Z)