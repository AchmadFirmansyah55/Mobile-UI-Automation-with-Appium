const LoginPage = require ('../pages/login.page');
const CatalogProductPage = require ('../pages/catalog.product.page');

describe('Login test', function(){
    let login;
    let catalogProduct;
    
    beforeEach(async function(){
        await driver.activateApp('com.saucelabs.mydemoapp.android');
        login = new LoginPage();
        catalogProduct = new CatalogProductPage();
        await catalogProduct.clickBurgerButton();
        await catalogProduct.clickLoginMenu();
    })

    afterEach(async function(){
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
    })

    it('Should login with valid credentials',async function(){
        await login.inputUsername('bod@example.com');
        await login.inputPassword('10203040');
        await login.clickLoginButton();
        await catalogProduct.expectTitleToBeDisplayed();
    })

    it('Should not login with empty username', async function(){
        await login.inputPassword('10203040');
        await login.clickLoginButton();
        await login.expectUsernameEmptyMessage();
        await catalogProduct.expectNotOnProductPage();
    })

    it('Should not login with empty password', async function(){
        await login.inputUsername('bod@example.com');
        await login.clickLoginButton();
        await login.expectPasswordEmptyMessage();
        await catalogProduct.expectNotOnProductPage();
    })

    it('Should not login with empty username and password', async function(){
        await login.clickLoginButton();
        await login.expectUsernameEmptyMessage();
        await catalogProduct.expectNotOnProductPage();
    })

    it('Should not login with invalid credentials', async function(){
        await login.inputUsername('invalidusername');
        await login.inputPassword('invalidpassword');
        await login.clickLoginButton();
        await catalogProduct.expectNotOnProductPage();
    })

    it('Should not login with locked user', async function(){
        await login.inputUsername('alice@example.com');
        await login.inputPassword('10203040');
        await login.clickLoginButton();
        await login.expectLockedUserMessage();
        await catalogProduct.expectNotOnProductPage();
    })
})