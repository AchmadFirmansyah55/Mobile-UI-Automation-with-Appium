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
        await expect(emptyMessage).toHaveText('Value looks invalid.');
        await expect(emptyMessage).toBeDisplayed();
    }

    async expectCardNumberError(){
        let errorSign = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.cardNumberErrorSign);
        await expect(errorSign).toBeDisplayed();
    }

    async expectFillExpirationDateField(){
        let emptyMessage = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyExpirationDate);
        await expect(emptyMessage).toHaveText('Value looks invalid.');
        await expect(emptyMessage).toBeDisplayed();
    }

    async expectFillSecurityCodeField(){
        let emptyMessage = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptySecurityCode);
        await expect(emptyMessage).toHaveText('Value looks invalid.');
        await expect(emptyMessage).toBeDisplayed();
    }

    async inputBillingName(name){
        let fullNameElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.fullname);
        await fullNameElement.setValue(name);
    }

    async inputBillingAddress1(address1){
        let address1Element = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address1);
        await address1Element.setValue(address1);
    }

    async inputBillingAddress2(address2){
        let address2Element = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address2);
        await address2Element.setValue(address2);
    }

    async inputBillingCity(city){
        let cityElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.city);
        await cityElement.setValue(city);
    }

     async inputBillingState(state){
        let stateElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.state);
        await stateElement.setValue(state);
    }

    async inputBillingZipCode(zipCode){
        let zipCodeElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.zipCode);
        await zipCodeElement.setValue(zipCode);
    }

    async inputBillingCountry(country){
        let countryElement = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.country);
        await countryElement.setValue(country);
    }

    async expectFillBillingName(){
        let emptyFullName = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyFullName);
        await expect(emptyFullName).toHaveText('Please provide your full name.');
        await expect(emptyFullName).toBeDisplayed();
    }

    async expectFillBillingAddress(){
        let emptyAddress = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyAddress);
        await expect(emptyAddress).toHaveText('Please provide your address.');
        await expect(emptyAddress).toBeDisplayed();
    }

    async expectFillBillingCity(){
        let emptyCity = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyCity);
        await expect(emptyCity).toHaveText('Please provide your city.');
        await expect(emptyCity).toBeDisplayed();
    }

    async expectFillBillingZipCode(){
        let emptyZipCode = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyZipCode);
        await expect(emptyZipCode).toHaveText('Please provide your zip');
        await expect(emptyZipCode).toBeDisplayed();
    }

    async expectFillBillingCountry(){
        let emptyCountry = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.emptyCountry);
        await expect(emptyCountry).toHaveText('Please provide your country');
        await expect(emptyCountry).toBeDisplayed();
    }

    async expectPage(){
        let title = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.title);
        await expect(title).toBeDisplayed();
    }

    async scrollToBottom(){
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(10)`);
    }

    async clearNameField(){
        let name = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.name);
        await name.clearValue();
    }

    async clearCardNumberField(){
        let cardNumber = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.cardNumber);
        await cardNumber.clearValue();
    }

    async clearExpirationDateField(){
        let expirationDate = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.expirationDate);
        await expirationDate.clearValue();
    }

    async clearSecurityCodeField(){
        let securityCode = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.securityCode);
        await securityCode.clearValue();
    }

    async clearBillingNameField(){
        let fullname = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.fullname);
        await fullname.clearValue();
    }

    async clearBillingAddress1Field(){
        let address1 = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address1);
        await address1.clearValue();
    }

    async clearBillingAddress2Field(){
        let address2 = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address2);
        await address2.clearValue();
    }

    async clearBillingCityField(){
        let city = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.city);
        await city.clearValue();
    }

    async clearBillingZipCodeField(){
        let zipCode = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.zipCode);
        await zipCode.clearValue();
    }

    async clearBillingStateField(){
        let state = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.state);
        await state.clearValue();
    }

    async clearBillingCountryField(){
        let country = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.country);
        await country.clearValue();
    }

    async expectBillingFieldIsNotDisplayed(){
        let name = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.fullname);
        let address1 = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address1);
        let address2 = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address2);
        let city = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.city);
        let zipCode = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.zipCode);
        let state = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.state);
        let country = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.country);
        await expect(name).not.toBeDisplayed();
        await expect(address1).not.toBeDisplayed();
        await expect(address2).not.toBeDisplayed();
        await expect(city).not.toBeDisplayed();
        await expect(zipCode).not.toBeDisplayed();
        await expect(state).not.toBeDisplayed();
        await expect(country).not.toBeDisplayed();
    }

    async expectBillingFieldToBeDisplayed(){
        let name = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.fullname);
        let address1 = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address1);
        let address2 = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.address2);
        let city = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.city);
        let zipCode = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.zipCode);
        let state = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.state);
        let country = await $(CHECKOUT_PAYMENT_LOCATORS.selectors.country);
        await expect(name).toBeDisplayed();
        await expect(address1).toBeDisplayed();
        await expect(address2).toBeDisplayed();
        await expect(city).toBeDisplayed();
        await expect(zipCode).toBeDisplayed();
        await expect(state).toBeDisplayed();
        await expect(country).toBeDisplayed();
    }
}

module.exports=CheckoutPaymentPage