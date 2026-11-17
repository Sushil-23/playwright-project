import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('#cart');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    this.checkoutButton = page.getByRole('link', { name: 'Checkout', exact:true });
    this.productNameInCart = page.locator('.table-responsive tbody tr td').nth(1);
  }

  async openCart() {
    await this.cartButton.click();
    await this.viewCartLink.click();
  }

  async verifyProductInCart(productName) {
    await expect(this.productNameInCart).toContainText(productName);
  }

  async proceedToCheckout() {
    await Promise.all[(
      this.page.waitForURL(/route=checkout\/checkout/),
      await this.checkoutButton.click()
    )]
    
  }
}