import { expect } from '@playwright/test';

export class SearchPage {

    constructor(page){
        this.page = page;
        this.searchHeading = page.locator('#content h1');
        this.productThumb = page.locator('.product-thumb');
    }

    async verifySearchResult(productName){
        await expect(this.page).toHaveURL(/search/);
        await expect(this.page.locator('#content h1')).toContainText(`Search - ${productName}`);
        await expect(this.productThumb.first()).toBeVisible();
    }

    async clickProduct(productName) {
    await this.page.getByRole('link', { name: productName }).first().click();
  }

}