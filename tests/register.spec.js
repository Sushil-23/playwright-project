// tests/register.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { newUser } from '../test-data/users';

test('Register a new account successfully', async ({ page }) => {


  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);
  const user = newUser();

  await homePage.goto();
  await homePage.clickRegister();
  await registerPage.register(user);
  await registerPage.verifyRegistrationSuccess();

});