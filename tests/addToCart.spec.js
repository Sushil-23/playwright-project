// tests/addToCart.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Search product, add to cart and verify', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  const productName = 'MacBook';

  // 1. Search for product
  await homePage.goto();
  await homePage.searchProduct(productName);
  await searchPage.verifySearchResult(productName);

  await page.getByRole('link', { name: productName }).first().click();

  await productPage.addToCart();
  await productPage.verifyAddedToCart(productName);

  await cartPage.openCart();
  await cartPage.verifyProductInCart(productName);
});