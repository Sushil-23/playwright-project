import { expect } from '@playwright/test';

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart', exact: true });
    this.successMessage = page.locator('.alert-success');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async verifyAddedToCart(productName) {
    await expect(this.successMessage).toContainText(`Success: You have added ${productName}`);
  }
}