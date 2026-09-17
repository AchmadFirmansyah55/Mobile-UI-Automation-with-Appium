const LOGIN_LOCATORS = require ('../locators/login.locator');

class LoginPage {
    async inputUsername(username){
        let usernameField = $(LOGIN_LOCATORS.selectors.usernameField);
        await usernameField.setValue(username);
    }

    async inputPassword(password){
        let passwordField = $(LOGIN_LOCATORS.selectors.passwordField);
        await passwordField.setValue(password);
    }

    async clickLoginButton(){
        let loginButton = $(LOGIN_LOCATORS.selectors.loginButton);
        await loginButton.click();
    }

    async expectUsernameEmptyMessage(){
        let usernameMessage = $(LOGIN_LOCATORS.selectors.usernameEmptyMessage);
        await expect(usernameMessage).toHaveText('Username is required');
        await expect(usernameMessage).toBeDisplayed();
    }

    async expectPasswordEmptyMessage(){
        let passwordMessage = $(LOGIN_LOCATORS.selectors.passwordEmptyMessage);
        await expect(passwordMessage).toHaveText('Enter Password');
        await expect(passwordMessage).toBeDisplayed();
    }

    async expectLockedUserMessage(){
        let lockedUserMessage = $(LOGIN_LOCATORS.selectors.lockedUserMessage);
        await expect(lockedUserMessage).toHaveText('Sorry this user has been locked out.');
        await expect(lockedUserMessage).toBeDisplayed();
    }

}

module.exports = LoginPage;