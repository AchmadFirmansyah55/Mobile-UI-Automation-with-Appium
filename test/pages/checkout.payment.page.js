const CHECKOUT_PAYMENT_LOCATORS = require('../locators/checkout.payment.locator');

class CheckoutPaymentPage{
    async inputName(name){
        let nameElement = $(CHECKOUT_PAYMENT_LOCATORS.selectors.name);
        await nameElement.setValue(name);
    }
    
    async inputCardNumber(expirationDate){
        let cardNumberElement = $(CHECKOUT_PAYMENT_LOCATORS.selectors.cardNumber);
        await cardNumberElement.setValue(expirationDate);
    }

    async inputExpirationDate(expirationDate){
        let expirationDateElement = $(CHECKOUT_PAYMENT_LOCATORS.selectors.expirationDate);
        await expirationDateElement.setValue(expirationDate);
    }

    async inputSecurityCode(securityCode){
        let securityCodeElement = $(CHECKOUT_PAYMENT_LOCATORS.selectors.securityCode);
        await securityCodeElement.setValue(securityCode);
    }

    async uncheckBillingAddress(){
        let checkBox = $(CHECKOUT_PAYMENT_LOCATORS.selectors.checkBoxBillingAddress);
        await checkBox.click();
    }

    async clickReviewOrderButton(){
        let reviewOrder = $(CHECKOUT_PAYMENT_LOCATORS.selectors.reviewOrderButton);
        await reviewOrder.click();
    }

    async expectFillFullNameField(){
        let emptyMessage = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyName);
        await expect(emptyMessage).toHaveText('Value looks invalid');
        await expect(emptyMessage).toBeDisplayed();
    }

    async expectFillExpirationDateField(){
        let emptyMessage = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyExpirationDate);
        await expect(emptyMessage).toHaveText('Value looks invalid');
        await expect(emptyMessage).toBeDisplayed();
    }

    async expectFillSecurityCodeField(){
        let emptyMessage = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptySecurityCode);
        await expect(emptyMessage).toHaveText('Value looks invalid');
        await expect(emptyMessage).toBeDisplayed();
    }

    async inputFullName(name){
        let fullNameElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.fullname);
        await fullNameElement.setValue(name);
    }

    async inputAddress1(address){
        let address1Element = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address1);
        await address1Element.setValue(address);
    }

    async inputAddress2(address){
        let address2Element = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address2);
        await address2Element.setValue(address);
    }

    async inputCity(city){
        let cityElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.city);
        await cityElement.setValue(city);
    }

     async inputState(state){
        let stateElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.state);
        await stateElement.setValue(state);
    }

    async inputZipCode(zipCode){
        let zipCodeElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.zipCode);
        await zipCodeElement.setValue(zipCode);
    }

    async inputCountry(country){
        let countryElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.country);
        await countryElement.setValue(country);
    }

    async expectFillFullNameField(){
        let emptyFullName = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyFullName);
        await expect(emptyFullName).toHaveText('Please provide your full name.');
        await expect(emptyFullName).toBeDisplayed();
    }

    async expectFillAddressField(){
        let emptyAddress = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyAddress);
        await expect(emptyAddress).toHaveText('Please provide your address.');
        await expect(emptyAddress).toBeDisplayed();
    }

    async expectFillCityField(){
        let emptyCity = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyCity);
        await expect(emptyCity).toHaveText('Please provide your city.');
        await expect(emptyCity).toBeDisplayed();
    }

    async expectZipCodeField(){
        let emptyZipCode = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyZipCode);
        await expect(emptyZipCode).toHaveText('Please provide your zip');
        await expect(emptyZipCode).toBeDisplayed();
    }

    async expectCountryField(){
        let emptyCountry = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyCountry);
        await expect(emptyCountry).toHaveText('Please provide your country');
        await expect(emptyCountry).toBeDisplayed();
    }
}

module.exports=CheckoutPaymentPage