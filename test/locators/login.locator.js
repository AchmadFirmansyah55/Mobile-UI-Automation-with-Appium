const LOGIN_LOCATORS = {
    selectors:{
        usernameField : 'id=com.saucelabs.mydemoapp.android:id/nameET',
        passwordField : 'id=com.saucelabs.mydemoapp.android:id/passwordET',
        loginButton : '~Tap to login with given credentials',
        usernameEmptyMessage : 'id=com.saucelabs.mydemoapp.android:id/nameErrorTV',
        passwordEmptyMessage : 'id=com.saucelabs.mydemoapp.android:id/passwordErrorTV',
        lockedUserMessage : 'id=com.saucelabs.mydemoapp.android:id/passwordErrorTV'
    }
}
module.exports = LOGIN_LOCATORS;