// tests/search.spec.js
import { test, expect } from '../fixtures/pomFixture';

test('Search for MacBook and verify results @smoke @search', async ({ homePage, searchPage }) => {

  await homePage.goto();
  await homePage.searchProduct('MacBook');
  await searchPage.verifySearchResult('MacBook');
  
});