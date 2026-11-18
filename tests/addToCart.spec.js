// tests/addToCart.spec.js
import { test, expect } from '../fixtures/pomFixture';

test('Search product, add to cart and verify @smoke @cart', async ({ page, homePage, searchPage, productPage, cartPage }) => {

  const productName = 'MacBook';

  // 1. Search for product
  await homePage.goto();
  await homePage.searchProduct(productName);
  await searchPage.verifySearchResult(productName);

  await searchPage.clickProduct(productName);

  await productPage.addToCart();
  await productPage.verifyAddedToCart(productName);

  await cartPage.openCart();
  await cartPage.verifyProductInCart(productName);
});