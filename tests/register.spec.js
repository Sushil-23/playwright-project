// tests/register.spec.js
import { test, expect } from '../fixtures/pomFixture';
import { newUser } from '../test-data/users';

test('Register a new account successfully', async ({ page, homePage, registerPage }) => {

  const user = newUser();

  await homePage.goto();
  await homePage.clickRegister();
  await registerPage.register(user);
  await registerPage.verifyRegistrationSuccess();

});