const LoginPage = require ('../pages/login.page');
const InventoryPage = require ('../pages/inventory.page');

describe('Login test', async function(){
    let login;
    let inventory;
    
    beforeEach(async function(){
        await driver.activateApp('com.saucelabs.mydemoapp.android');
        login = new LoginPage();
        inventory = new InventoryPage();
        await inventory.clickBurgerButton();
        await inventory.clickLoginMenu();
    })

    afterEach(async function(){
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
    })

    it('Should login with valid credentials',async function(){
        await login.inputUsername('bod@example.com');
        await login.inputPassword('10203040');
        await login.clickLoginButton();
        await inventory.expectTitleToBeDisplayed();
    })

    it('Should not login with empty username', async function(){
        await login.inputPassword('10203040');
        await login.clickLoginButton();
        await login.expectUsernameEmptyMessage();
        await inventory.expectNotOnProductPage();
    })

    it('Should not login with empty password', async function(){
        await login.inputUsername('bod@example.com');
        await login.clickLoginButton();
        await login.expectPasswordEmptyMessage();
        await inventory.expectNotOnProductPage();
    })

    it('Should not login with empty username and password', async function(){
        await login.clickLoginButton();
        await login.expectUsernameEmptyMessage();
        await inventory.expectNotOnProductPage();
    })

    it('Should not login with invalid credentials', async function(){
        await login.inputUsername('invalidusername');
        await login.inputPassword('invalidpassword');
        await login.clickLoginButton();
        await inventory.expectNotOnProductPage();
    })

    it('Should not login with locked user', async function(){
        await login.inputUsername('alice@example.com');
        await login.inputPassword('10203040');
        await login.clickLoginButton();
        await login.expectLockedUserMessage();
        await inventory.expectNotOnProductPage();
    })
})