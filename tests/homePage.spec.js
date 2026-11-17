// tests/homePage.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Home page should load successfully', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle('Your Store');
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.searchBox).toBeVisible();
});