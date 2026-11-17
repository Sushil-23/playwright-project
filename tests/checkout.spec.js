// tests/checkout.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { guestUser } from '../test-data/users';

test('Complete guest checkout flow', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const productName = 'HP';

  // 1. Search & Add to Cart
  await homePage.goto();
  await homePage.searchProduct(productName);
  await searchPage.verifySearchResult(productName);
  await page.getByRole('link', { name: productName }).first().click();
  await productPage.addToCart();
  await productPage.verifyAddedToCart(productName);

  // 2. Go to Cart → Checkout
  await cartPage.openCart();
  await cartPage.proceedToCheckout();

  // 3. Guest Checkout
  await checkoutPage.selectGuestCheckout();
  await checkoutPage.fillBillingDetails(guestUser);
  await checkoutPage.continueDeliveryMethod();
  await checkoutPage.continuePaymentMethod();
  await checkoutPage.confirmOrder();

  // 4. Verify success
  await checkoutPage.verifyOrderSuccess();
});