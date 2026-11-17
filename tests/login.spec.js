import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { validUser } from '../test-data/users';

test('Login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.goto();
    await homePage.clickLogin();
    await loginPage.login(validUser.email, validUser.password);
    await loginPage.verifyLoginSuccess();
});