// pages/CheckoutPage.js
class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstName = page.locator('[data-test="firstName"]');
      this.lastName = page.locator('[data-test="lastName"]');
      this.postalCode = page.locator('[data-test="postalCode"]');
      this.continueButton = page.locator('[data-test="continue"]');
      this.finishButton = page.locator('[data-test="finish"]');
      this.successMessage = page.locator('.complete-header');
    }
  
    async fillInfo(first, last, zip) {
      await this.firstName.fill(first);
      await this.lastName.fill(last);
      await this.postalCode.fill(zip);
      await this.continueButton.click();
    }
  
    async finishCheckout() {
      await this.finishButton.click();
    }
  
    async getSuccessMessage() {
      return await this.successMessage.textContent();
    }
  }
  
  module.exports = { CheckoutPage };