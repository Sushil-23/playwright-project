export class HomePage {

    constructor(page) {
        this.page = page;
        this.myAccount = page.locator('a[title="My Account"]');
        this.loginLink = page.getByRole('link', { name: 'Login' });
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.searchBox = page.getByPlaceholder('Search');
        this.searchButton = page.locator('button.btn.btn-default.btn-lg');
        this.logo = page.locator('#logo');
    }

    async goto(){
        await this.page.goto('https://tutorialsninja.com/demo/');
    }

    async clickLogin(){
        await this.myAccount.click();
        await this.loginLink.click();
    }

    async clickRegister(){
        await this.myAccount.click();
        await this.registerLink.click();
    }

    async searchProduct(productName){
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }
}