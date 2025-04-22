// pages/InventoryPage.js
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstItemAddToCart = page.locator('.inventory_item button');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addItemToCart() {
    await this.firstItemAddToCart.first().click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };