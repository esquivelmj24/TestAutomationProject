import {test,expect} from '@playwright/test';
import {LoginPage} from '../POM/LoginPage';


//Test Cases no. 1
// Login with valid username and password
test('Login using valid username and password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.LoginFunctionality('standard_user','secret_sauce');
})


//Test Cases no. 2
// Login using invalid username and Password




// Test Cases no. 3
// Login using blank fields for username and password


