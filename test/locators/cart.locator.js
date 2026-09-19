const CART_LOCATORS = {
    selectors: {
        cartTitle : 'id=com.saucelabs.mydemoapp.android:id/productTV',
        checkoutButton : '~Confirms products for checkout',
        totalText : '//android.widget.TextView[@text="Total:"]',
        totalPrice : 'id=com.saucelabs.mydemoapp.android:id/totalPriceTV',
        totalItem : 'id=com.saucelabs.mydemoapp.android:id/itemsTV'
    }
}

module.exports = CART_LOCATORS