// playwright.config.js
module.exports = {
    testDir: 'tests',  // Папка с тестами
    timeout: 30000,    // Тайм-аут выполнения тестов
    expect: {
      timeout: 5000,   // Тайм-аут ожидания элементов
    },
    use: {
      headless: false,  // Показывать браузер (если нужно для дебага)
      browserName: 'chromium',  // Используем Chromium
      baseURL: 'https://www.saucedemo.com', // Базовый URL
    },
  };
  