const LoginPage = require ('../pages/login.page');
const DetailProductPage = require ('../pages/detail.product.page');
const CartPage = require ('../pages/cart.page');
const CatalogProductPage = require ('../pages/catalog.product.page');

describe('Add product test', function(){
    let login;
    let detailProduct;
    let cart;
    let catalogProduct;

    beforeEach(async function(){
        await driver.activateApp('com.saucelabs.mydemoapp.android');
        login = new LoginPage();
        detailProduct = new DetailProductPage();
        cart = new CartPage();
        catalogProduct = new CatalogProductPage();
    })

    afterEach(async function(){
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
    })

    it('Should scroll',async function(){
        await catalogProduct.scrollProduct('Sauce Labs Bolt T-Shirt');
        await driver.pause();
    })
})