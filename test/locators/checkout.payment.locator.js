const CHECKOUT_PAYMENT_LOCATORS = {
    selectors:{
        title : 'id=com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV',
        name : 'id=com.saucelabs.mydemoapp.android:id/nameET',
        cardNumber : 'id=com.saucelabs.mydemoapp.android:id/cardNumberET',
        expirationDate : 'id=com.saucelabs.mydemoapp.android:id/expirationDateET',
        securityCode : 'id=com.saucelabs.mydemoapp.android:id/securityCodeET',
        checkBoxBillingAddress : 'id=com.saucelabs.mydemoapp.android:id/billingAddressCB',
        emptyName :'id=com.saucelabs.mydemoapp.android:id/nameErrorTV',
        emptyExpirationDate :'id=com.saucelabs.mydemoapp.android:id/expirationDateErrorTV',
        emptySecurityCode :'id=com.saucelabs.mydemoapp.android:id/securityCodeErrorTV',
        fullname : 'id=com.saucelabs.mydemoapp.android:id/fullNameET',
        address1 : 'id=com.saucelabs.mydemoapp.android:id/address1ET',
        address2 : 'id=com.saucelabs.mydemoapp.android:id/address2ET',
        city : 'id=com.saucelabs.mydemoapp.android:id/cityET',
        state : 'id=com.saucelabs.mydemoapp.android:id/stateET',
        zipCode : 'id=com.saucelabs.mydemoapp.android:id/zipET',
        country : 'id=com.saucelabs.mydemoapp.android:id/countryET',
        emptyFullName : 'id=com.saucelabs.mydemoapp.android:id/fullNameErrorTV',
        emptyAddress : 'id=com.saucelabs.mydemoapp.android:id/address1ErrorTV',
        emptyCity : 'id=com.saucelabs.mydemoapp.android:id/cityErrorTV',
        emptyZipCode : 'id=com.saucelabs.mydemoapp.android:id/zipErrorTV',
        emptyCountry : 'id=com.saucelabs.mydemoapp.android:id/countryErrorTV',
        reviewOrderButton : 'id=com.saucelabs.mydemoapp.android:id/paymentBtn'
    }
}

module.exports=CHECKOUT_PAYMENT_LOCATORS;