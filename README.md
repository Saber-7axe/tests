## Инструкция по запуску

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/Saber-7axe/tests.git
    cd tests
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Установите браузеры:
    ```bash
    npx playwright install
    ```

4. Для запуска всех тестов:
    ```bash
    npx playwright test
    ```

5. Для запуска тестов в определенном браузере (например, **Chromium**, **firefox**, **webkit**):
    ```bash
    npx playwright test --project=chromium
    ```

6. Для запуска тестов в браузере с интерфейсом:
    ```bash
    npx playwright test --headed
    ```

7. Для запуска конкретного теста:
    ```bash
    npx playwright test tests/путь_к_тесту.spec.js
    ```

Теперь тесты готовы к запуску!