// tests/homePage.spec.js
import { test, expect } from '../fixtures/pomFixture';


test('Home page should load successfully', async ({ page, homePage }) => {

    await homePage.goto();
    await expect(page).toHaveTitle('Your Store');
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.searchBox).toBeVisible();
});