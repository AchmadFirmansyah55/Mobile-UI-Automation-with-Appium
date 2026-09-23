const CHECKOUT_SHIPPING_ADRESS_LOCATORS = {
    selectors:{
        fullname : 'id=com.saucelabs.mydemoapp.android:id/fullNameET',
        address1 : 'id=com.saucelabs.mydemoapp.android:id/address1ET',
        address2 : 'id=com.saucelabs.mydemoapp.android:id/address2ET',
        city : 'id=com.saucelabs.mydemoapp.android:id/cityET',
        state : 'id=com.saucelabs.mydemoapp.android:id/stateET',
        zipCode : 'id=com.saucelabs.mydemoapp.android:id/zipET',
        country : 'id=com.saucelabs.mydemoapp.android:id/countryET',
        paymentButton : 'id=com.saucelabs.mydemoapp.android:id/paymentBtn',
        emptyFullName : 'id=com.saucelabs.mydemoapp.android:id/fullNameErrorTV',
        emptyAddress : 'id=com.saucelabs.mydemoapp.android:id/address1ErrorTV',
        emptyCity : 'id=com.saucelabs.mydemoapp.android:id/cityErrorTV',
        emptyZipCode : 'id=com.saucelabs.mydemoapp.android:id/zipErrorTV',
        emptyCountry : 'id=com.saucelabs.mydemoapp.android:id/countryErrorTV'
    }
}
module.exports=CHECKOUT_SHIPPING_ADRESS_LOCATORS;