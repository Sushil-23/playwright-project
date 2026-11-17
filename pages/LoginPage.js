import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByLabel('E-Mail Address');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.myAccountHeading = page.locator('div#content h2').first();
    }

    async login(email, password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL(/account\/account/);
        await expect(this.myAccountHeading).toContainText('My Account');
    }
}