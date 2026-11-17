// pages/CheckoutPage.js
import { expect } from '@playwright/test';

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.guestCheckoutRadio = page.locator('input[value="guest"]');
        this.continueButton = page.locator('input[value="Continue"]');

        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.email = page.locator('#input-payment-email');
        this.telephone = page.getByLabel('Telephone');
        this.address1 = page.getByLabel('Address 1');
        this.city = page.getByLabel('City');
        this.postcode = page.getByLabel('Post Code');
        this.country = page.locator('select[name="country_id"]');
        this.region = page.locator('select[name="zone_id"]');
        this.billingDetailsContinueButton = page.locator('input[id="button-guest"]');
        this.shippingMethodContinueButton = page.locator('input[id="button-shipping-method"]');
        this.paymentMethodContinueButton = page.locator('input[id="button-payment-method"]')
        this.agreeTerms = page.locator('input[name="agree"]');
        this.confirmOrderButton = page.getByRole('button', { name: 'Confirm Order' });
        this.successHeading = page.locator('#content h1');
    }

    async selectGuestCheckout() {
        await this.guestCheckoutRadio.waitFor({ state: 'visible' });
        await this.guestCheckoutRadio.check();
        await this.page.waitForTimeout(1000);
        await this.continueButton.click();
        await this.firstName.waitFor({ state: 'visible', timeout: 10000 });
    }

    async fillBillingDetails(user) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.telephone.fill(user.telephone);
        await this.address1.fill(user.address);
        await this.city.fill(user.city);
        await this.postcode.fill(user.postcode);

        await this.country.selectOption({ label: 'India' });
        await this.page.waitForTimeout(1000);
        await this.region.selectOption({ label: 'Karnataka' });
        await this.page.waitForTimeout(1000);
        await this.billingDetailsContinueButton.click();
        await this.shippingMethodContinueButton.waitFor({ state: 'visible', timeout: 10000 });
    }

    async continueDeliveryMethod() {
        await this.shippingMethodContinueButton.click();
        // Wait for Payment Method section to appear
        await this.agreeTerms.waitFor({ state: 'visible', timeout: 10000 });
    }

    async continuePaymentMethod() {
        await this.agreeTerms.check();
        await this.paymentMethodContinueButton.click();
        // Wait for Confirm Order button
        await this.confirmOrderButton.waitFor({ state: 'visible', timeout: 10000 });
    }

    async confirmOrder() {
        await this.confirmOrderButton.click();
    }

    async verifyOrderSuccess() {
        await expect(this.page).toHaveURL(/success/);
        await expect(this.successHeading).toContainText('Your order has been placed!');
    }
}