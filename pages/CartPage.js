// pages/CartPage.js
class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItems = page.locator('.cart_item');
      this.removeButton = page.locator('.cart_button');
      this.checkoutButton = page.locator('[data-test="checkout"]');
    }
  
    async removeItem() {
      await this.removeButton.first().click();
    }
  
    async countItems() {
      return await this.cartItems.count();
    }
  
    async goToCheckout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };