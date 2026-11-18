import { test, expect } from '../fixtures/pomFixture';
import { validUser } from '../test-data/users';

test('Login with valid credentials @smoke @login', async ({ homePage, loginPage }) => {

    await homePage.goto();
    await homePage.clickLogin();
    await loginPage.login(validUser.email, validUser.password);
    await loginPage.verifyLoginSuccess();
});