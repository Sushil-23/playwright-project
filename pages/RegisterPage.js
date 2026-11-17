import { expect } from '@playwright/test';

export class RegisterPage {
    constructor(page){
        this.page = page;
        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.email = page.getByLabel('E-Mail');
        this.telephone= page.getByLabel('Telephone');
        this.password = page.locator('#input-password');
        this.confirmPassword = page.getByLabel('Password Confirm');
        this.agreeCheckBox = page.locator('input[name="agree"]');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.successHeading = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
    }

    async register(user){
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.telephone.fill(user.telephone);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);
        await this.agreeCheckBox.click();
        await this.continueButton.click();

    }

    async verifyRegistrationSuccess(){
        await expect(this.page).toHaveURL(/account\/success/);
        await expect(this.successHeading).toContainText('Your Account Has Been Created!');
    }
}