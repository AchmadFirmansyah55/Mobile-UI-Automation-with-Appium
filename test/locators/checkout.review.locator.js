const CHECKOUT_REVIEW_LOCATORS = {
    selectors:{
        title : 'id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV',
        deliverAddressText : '//android.widget.TextView[@text="Deliver Address"]',
        fullname : 'id=com.saucelabs.mydemoapp.android:id/fullNameET',
        address : 'id=com.saucelabs.mydemoapp.android:id/addressTV',
        city : 'id=com.saucelabs.mydemoapp.android:id/cityTV',
        country : 'id=com.saucelabs.mydemoapp.android:id/countryTV',
        paymentMethodText : '//android.widget.TextView[@text="Payment Method"]',
        cardHolder : 'id=com.saucelabs.mydemoapp.android:id/cardHolderTV',
        cardNumber : 'id=com.saucelabs.mydemoapp.android:id/cardNumberTV',
        expirationDate : 'id=com.saucelabs.mydemoapp.android:id/expirationDateTV',
        billingAdressSame : 'id=com.saucelabs.mydemoapp.android:id/billingAddressTV',
        billingAdressText : '//android.widget.TextView[@text="Billing Address"]',
        billingFullName : 'id=com.saucelabs.mydemoapp.android:id/billFullnameTV',
        billingAdress : 'id=com.saucelabs.mydemoapp.android:id/billaddressTV',
        billingCityAndState : 'id=com.saucelabs.mydemoapp.android:id/billingCityAndStateTV',
        billingZipAndCountry : 'id=com.saucelabs.mydemoapp.android:id/billingZipAndCountryTV',
        DHLStandardDeliveryText : 'id=com.saucelabs.mydemoapp.android:id/dhlTV',
        taxAmount : 'id=com.saucelabs.mydemoapp.android:id/amountTV',
        totalText : 'id=com.saucelabs.mydemoapp.android:id/totalTextTV',
        itemNumber : 'id=com.saucelabs.mydemoapp.android:id/itemNumberTV',
        totalAmount : 'id=com.saucelabs.mydemoapp.android:id/totalAmountTV',
        placeOrderButton : '~Completes the process of checkout'
    }
}

module.exports=CHECKOUT_REVIEW_LOCATORS;