import {test, expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly loginButton: Locator;

    constructor(page:Page) {
        this.page = page
        this.inputUsername = page.getByPlaceholder("Username");
        this.inputPassword = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.locator('[id="login-button"]');
    }

    async LoginFunctionality(username: string, password: string) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.loginButton.click();
    }
}

//test 1