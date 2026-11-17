// tests/search.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';


test('Search for MacBook and verify results', async ({ page }) => {

  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  await homePage.goto();
  await homePage.searchProduct('MacBook');
  await searchPage.verifySearchResult('MacBook');
  
});