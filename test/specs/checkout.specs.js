const LoginPage = require('../pages/login.page');
const CatalogProductPage = require('../pages/catalog.product.page');
const DetailProductPage = require('../pages/detail.product.page');
const CartPage = require('../pages/cart.page');
const CheckoutShippingAddressPage = require('../pages/checkout.shipping.adress.page');
const CheckoutPaymentPage = require('../pages/checkout.payment.page');
const CheckoutReviewPage = require('../pages/checkout.review.page');
const CheckoutCompletePage = require('../pages/checkout.complete.page');

describe('Checkout Test', function(){
    let login;
    let catalogProduct;
    let detailProduct;
    let cart;
    let checkoutShippingAddress;
    let checkoutPayment;
    let checkoutReview;
    let checkoutComplete;

    beforeEach(async function(){
        await driver.activateApp('com.saucelabs.mydemoapp.android');
        login = new LoginPage();
        catalogProduct = new CatalogProductPage();
        detailProduct = new DetailProductPage();
        cart = new CartPage();
        checkoutShippingAddress = new CheckoutShippingAddressPage();
        checkoutPayment = new CheckoutPaymentPage();
        checkoutReview = new CheckoutReviewPage();
        checkoutComplete = new CheckoutCompletePage();
    })

    afterEach(async function(){
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
    })

    it('Should checkout product without login first', async function(){
        await catalogProduct.selectProduct('Sauce Labs Backpack');
        await detailProduct.clickAddCartButton();
        await detailProduct.clickCartIcon();
        await cart.clickProceedToCheckout();

        //goes to login page because user is not logged in
        await login.inputUsername('bod@example.com');
        await login.inputPassword('10203040');
        await login.clickLoginButton();

        //move to checkout shipping address page
        await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
        await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
        await checkoutShippingAddress.inputAddress2('Blok M No. 4, Kec.rungkut');
        await checkoutShippingAddress.inputCity('Surabaya');
        await checkoutShippingAddress.inputState('Jawa Timur');
        await checkoutShippingAddress.inputZipCode('60295');
        await checkoutShippingAddress.inputCountry('Indonesia');
        await checkoutShippingAddress.clickPaymentButton();

        //move to checkout payment page
        await checkoutPayment.inputName('Achmad Firmansyah H.');
        await checkoutPayment.inputCardNumber('1234123412341234');
        await checkoutPayment.inputExpirationDate('1010');
        await checkoutPayment.inputSecurityCode('123');
        await checkoutPayment.clickReviewOrderButton();

        //move to checkout review page
        await checkoutReview.expectToCheckoutReviewPage();
        await checkoutReview.expectProductInCheckoutReview('Sauce Labs Backpack');
        await checkoutReview.expectDeliverAddress({
            fullname: 'Achmad Firmansyah',
            address: 'Jl.Medokan Ayu',
            city: 'Surabaya, Jawa Timur',
            country: 'Indonesia, 60295'
        });

        await checkoutReview.expectPaymentMethod({
            cardHolder: 'Achmad Firmansyah H.',
            cardNumber: '1234123412341234',
            expirationDate: 'Exp: 10/10'
        });

        await checkoutReview.expectBillingAddressIsTheSame();
        await checkoutReview.expectDHLStandardDelivery();
        await checkoutReview.expectTotalItems(1);
        await checkoutReview.expectTotalAmount('35.98');
        await checkoutReview.clickPlaceOrder();

        //move to checkout complete page
        await checkoutComplete.expectToCheckoutCompletePage();
    })
})