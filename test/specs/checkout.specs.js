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
    
    describe('Happy Path', function(){
        it('Should checkout product normally', async function(){
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

    describe('Shipping Address', function(){
        beforeEach(async function(){
            await catalogProduct.selectProduct('Sauce Labs Backpack');
            await detailProduct.clickAddCartButton();
            await detailProduct.clickCartIcon();
            await cart.clickProceedToCheckout();

            //goes to login page because user is not logged in
            await login.inputUsername('bod@example.com');
            await login.inputPassword('10203040');
            await login.clickLoginButton();
        })

        it('Should not continue when Fullname is empty', async function(){
            await checkoutShippingAddress.inputFullName('');
            await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
            await checkoutShippingAddress.inputAddress2('Blok M No. 4, Kec.rungkut');
            await checkoutShippingAddress.inputCity('Surabaya');
            await checkoutShippingAddress.inputState('Jawa Timur');
            await checkoutShippingAddress.inputZipCode('60295');
            await checkoutShippingAddress.inputCountry('Indonesia');
            await checkoutShippingAddress.clickPaymentButton();
            await checkoutShippingAddress.expectFillFullNameField();
            await checkoutShippingAddress.expectPage();
        });

        it('Should not continue when Address1 is empty', async function(){
            await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
            await checkoutShippingAddress.inputAddress1('');
            await checkoutShippingAddress.inputAddress2('Blok M No. 4, Kec.rungkut');
            await checkoutShippingAddress.inputCity('Surabaya');
            await checkoutShippingAddress.inputState('Jawa Timur');
            await checkoutShippingAddress.inputZipCode('60295');
            await checkoutShippingAddress.inputCountry('Indonesia');
            await checkoutShippingAddress.clickPaymentButton();
            await checkoutShippingAddress.expectFillAddressField();
            await checkoutShippingAddress.expectPage();
        });

        it('Should not continue when City is empty', async function(){
            await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
            await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
            await checkoutShippingAddress.inputAddress2('Blok M No. 4, Kec.rungkut');
            await checkoutShippingAddress.inputCity('');
            await checkoutShippingAddress.inputState('Jawa Timur');
            await checkoutShippingAddress.inputZipCode('60295');
            await checkoutShippingAddress.inputCountry('Indonesia');
            await checkoutShippingAddress.clickPaymentButton();
            await checkoutShippingAddress.expectFillCityField();
            await checkoutShippingAddress.expectPage();
        });

        it('Should not continue when Zip Code is empty', async function(){
            await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
            await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
            await checkoutShippingAddress.inputAddress2('Blok M No. 4, Kec.rungkut');
            await checkoutShippingAddress.inputCity('Surabaya');
            await checkoutShippingAddress.inputState('Jawa Timur');
            await checkoutShippingAddress.inputZipCode('');
            await checkoutShippingAddress.inputCountry('Indonesia');
            await checkoutShippingAddress.clickPaymentButton();
            await checkoutShippingAddress.expectFillZipCodeField();
            await checkoutShippingAddress.expectPage();
        });

        it('Should not continue when Country is empty', async function(){
            await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
            await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
            await checkoutShippingAddress.inputAddress2('Blok M No. 4, Kec.rungkut');
            await checkoutShippingAddress.inputCity('Surabaya');
            await checkoutShippingAddress.inputState('Jawa Timur');
            await checkoutShippingAddress.inputZipCode('60295');
            await checkoutShippingAddress.inputCountry('');
            await checkoutShippingAddress.clickPaymentButton();
            await checkoutShippingAddress.expectFillCountryField();
            await checkoutShippingAddress.expectPage();
        });

        it('Should not continue when all fields are empty', async function(){
            await checkoutShippingAddress.clickPaymentButton();
            await checkoutShippingAddress.expectFillFullNameField();
            await checkoutShippingAddress.expectFillAddressField();
            await checkoutShippingAddress.expectFillCityField();
            await checkoutShippingAddress.expectFillZipCodeField();
            await checkoutShippingAddress.expectFillCountryField();
            await checkoutShippingAddress.expectPage();
        });

        it('Should continue to payment page when Address2 and State are empty', async function(){
            await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
            await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
            await checkoutShippingAddress.inputAddress2('');
            await checkoutShippingAddress.inputCity('Surabaya');
            await checkoutShippingAddress.inputState('');
            await checkoutShippingAddress.inputZipCode('60295');
            await checkoutShippingAddress.inputCountry('Indonesia');
            await checkoutShippingAddress.clickPaymentButton();

            //move to checkout payment page
            await checkoutPayment.expectPage();
        });
    })

    describe('Payment', function(){
        beforeEach(async function(){
            await catalogProduct.selectProduct('Sauce Labs Backpack');
            await detailProduct.clickAddCartButton();
            await detailProduct.clickCartIcon();
            await cart.clickProceedToCheckout();

            //login user
            await login.inputUsername('bod@example.com');
            await login.inputPassword('10203040');
            await login.clickLoginButton();

            //input valid shipping address
            await checkoutShippingAddress.inputFullName('Achmad Firmansyah');
            await checkoutShippingAddress.inputAddress1('Jl.Medokan Ayu');
            await checkoutShippingAddress.inputCity('Surabaya');
            await checkoutShippingAddress.inputZipCode('60295');
            await checkoutShippingAddress.inputCountry('Indonesia');
            await checkoutShippingAddress.clickPaymentButton();

            //input valid payment method 
            await checkoutPayment.inputName('Achmad');
            await checkoutPayment.inputCardNumber('1234 5678 9123 4567')
            await checkoutPayment.inputExpirationDate('10/10');
            await checkoutPayment.inputSecurityCode('123');
        })

        //helper for checked billing address is different condition
        async function fillBillingAddressField(){
            await checkoutPayment.inputBillingName('Achmad Firmansyah H.');
            await checkoutPayment.inputBillingAddress1('Malioboro');
            await checkoutPayment.inputBillingAddress2('Main Street No.10');
            await checkoutPayment.inputBillingCity('Yogyakarta');
            await checkoutPayment.inputBillingState('Central Java');
            await checkoutPayment.inputBillingZipCode('604020');
            await checkoutPayment.inputBillingCountry('Indonesia');
        }

        it('Should not continue when Name is empty', async function(){
            await checkoutPayment.clearNameField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillFullNameField();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when Card Number is empty', async function(){
            await checkoutPayment.clearCardNumberField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectCardNumberError();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when Expiration Date is empty', async function(){
            await checkoutPayment.clearExpirationDateField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillExpirationDateField();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when Security Code is empty', async function(){
            await checkoutPayment.clearSecurityCodeField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillSecurityCodeField();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when all fields are empty', async function(){
            await checkoutPayment.clearNameField();
            await checkoutPayment.clearCardNumberField();
            await checkoutPayment.clearExpirationDateField();
            await checkoutPayment.clearSecurityCodeField();

            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillFullNameField();
            await checkoutPayment.expectCardNumberError();
            await checkoutPayment.expectFillExpirationDateField();
            await checkoutPayment.expectFillSecurityCodeField();
            await checkoutPayment.expectPage();
        })

        it('Should continue with valid billing address when unchecked', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fill billing address fields
            await fillBillingAddressField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutReview.expectPage();
        })

        it('Should not continue when Full Name is empty with billing address unchecked', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fullfil all billing address fields except full name field
            await fillBillingAddressField();
            await checkoutPayment.clearBillingNameField();

            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillBillingName();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when Address Line 1 is empty with billing address unchecked)', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fullfil all billing address fields except Address Line 1 field
            await fillBillingAddressField();
            await checkoutPayment.clearBillingAddress1Field();

            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillBillingAddress();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when City is empty with billing address unchecked)', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fullfil all billing address fields except City field
            await fillBillingAddressField();
            await checkoutPayment.clearBillingCityField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillBillingCity();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when Zip Code is empty with billing address unchecked)', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fullfil all billing address fields except Zip code field
            await fillBillingAddressField();
            await checkoutPayment.clearBillingZipCodeField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillBillingZipCode();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when Country is empty with billing address unchecked)', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fullfil all billing address fields except Country field
            await fillBillingAddressField();
            await checkoutPayment.clearBillingCountryField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutPayment.expectFillBillingCountry();
            await checkoutPayment.expectPage();
        })

        it('Should not continue when all billing address fields are empty)', async function(){
            await checkoutPayment.clearNameField();
            await checkoutPayment.clearCardNumberField();
            await checkoutPayment.clearExpirationDateField();
            await checkoutPayment.clearSecurityCodeField();

            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.clickReviewOrderButton();

            //excpect payment method validation
            await checkoutPayment.expectFillFullNameField();
            await checkoutPayment.expectCardNumberError();
            await checkoutPayment.expectFillExpirationDateField();
            await checkoutPayment.expectFillSecurityCodeField();

            //expect billing address validation
            await checkoutPayment.scrollToBottom();
            await checkoutPayment.expectFillBillingName();
            await checkoutPayment.expectFillBillingAddress();
            await checkoutPayment.expectFillBillingCity();
            await checkoutPayment.expectFillBillingZipCode();
            await checkoutPayment.expectFillBillingCountry();
            await checkoutPayment.expectPage();
        })

        it('Should continue when Address2 and State are empty with billing address unchecked)', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();

            //fullfil all billing address fields except Country field
            await fillBillingAddressField();
            await checkoutPayment.clearBillingAddress2Field();
            await checkoutPayment.clearBillingStateField();
            await checkoutPayment.clickReviewOrderButton();
            await checkoutReview.expectPage();
        })

        it('Should hide billing address fields when checked)', async function(){
            await checkoutPayment.scrollToBottom();
            await checkoutPayment.expectBillingFieldIsNotDisplayed()
        })

        it('Should display billing address fields when unchecked)', async function(){
            await checkoutPayment.uncheckBillingAddress();
            await checkoutPayment.scrollToBottom();
            await checkoutPayment.expectBillingFieldToBeDisplayed()
        })
    })
})