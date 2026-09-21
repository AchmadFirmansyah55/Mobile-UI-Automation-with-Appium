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

    it('Should add one product', async function(){
        await catalogProduct.selectProduct('Sauce Labs Backpack');
        await detailProduct.expectProductName('Sauce Labs Backpack');
        await detailProduct.clickAddCartButton();
        await detailProduct.expectCartIconCount(1);
        await detailProduct.clickCartIcon();
        await cart.expectProductQuantityToBe('Sauce Labs Backpack',1);
    })

    it('Should multiple quantity in one product', async function(){
        await catalogProduct.selectProduct('Sauce Labs Backpack');
        await detailProduct.clickPlusQuantity(2);
        await detailProduct.expectItemQuantity(3);
        await detailProduct.clickAddCartButton();
        await detailProduct.expectCartIconCount(3);
        await detailProduct.clickCartIcon();
        await cart.expectProductQuantityToBe('Sauce Labs Backpack',3);
    })

    it('Should decrease item quantity in detail product', async function(){
        await catalogProduct.selectProduct('Sauce Labs Backpack');
        await detailProduct.clickPlusQuantity(3);
        await detailProduct.clickMinusQuantity(2);
        await detailProduct.expectItemQuantity(2);
        await detailProduct.clickAddCartButton();
        await detailProduct.expectCartIconCount(2);
        await detailProduct.clickCartIcon();
        await cart.expectProductQuantityToBe('Sauce Labs Backpack',2);
    })

    it('Should add multiple products', async function(){
        await catalogProduct.selectProduct('Sauce Labs Backpack');
        await detailProduct.clickAddCartButton();
        await driver.back();
        await catalogProduct.selectProduct('Sauce Labs Backpack (orange)');
        await detailProduct.clickAddCartButton();
        await detailProduct.expectCartIconCount(2);
        await detailProduct.clickCartIcon();
        await cart.expectProductQuantityToBe('Sauce Labs Backpack',1);
        await cart.expectProductQuantityToBe('Sauce Labs Backpack (orange)',1);
    })

    it('Should not add product with zero quantity',async function(){
        await catalogProduct.selectProduct('Sauce Labs Backpack');
        await detailProduct.clickMinusQuantity(1);
        await detailProduct.expectItemQuantity(0);
        await detailProduct.clickAddCartButton();
        await detailProduct.clickCartIcon();
        await cart.expectEmptyCart();
    })
})