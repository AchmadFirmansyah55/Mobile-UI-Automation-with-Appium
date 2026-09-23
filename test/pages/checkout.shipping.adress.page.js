const CHECKOUT_SHIPPING_ADDRESS_LOCATORS = require('../locators/checkout.shipping.address.locator');

class CheckoutShippingAddressPage {
    async inputFullName(name){
        let fullNameElement = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.fullname);
        await fullNameElement.setValue(name);
    }

    async inputAddress1(address){
        let address1Element = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.address1);
        await address1Element.setValue(address);
    }

    async inputAddress2(address){
        let address2Element = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.address2);
        await address2Element.setValue(address);
    }

    async inputCity(city){
        let cityElement = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.city);
        await cityElement.setValue(city);
    }

    async inputState(state){
        let stateElement = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.state);
        await stateElement.setValue(state);
    }

    async inputZipCode(zipCode){
        let zipCodeElement = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.zipCode);
        await zipCodeElement.setValue(zipCode);
    }

    async inputCountry(country){
        let countryElement = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.country);
        await countryElement.setValue(country);
    }

    async clickPaymentButton(){
        let paymentButton = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.paymentButton);
        await paymentButton.click();
    }

    async expectFillFullNameField(){
        let emptyFullName = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.emptyFullName);
        await expect(emptyFullName).toHaveText('Please provide your full name.');
        await expect(emptyFullName).toBeDisplayed();
    }

    async expectFillAddressField(){
        let emptyAddress = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.emptyAddress);
        await expect(emptyAddress).toHaveText('Please provide your address.');
        await expect(emptyAddress).toBeDisplayed();
    }

    async expectFillCityField(){
        let emptyCity = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.emptyCity);
        await expect(emptyCity).toHaveText('Please provide your city.');
        await expect(emptyCity).toBeDisplayed();
    }

    async expectZipCodeField(){
        let emptyZipCode = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.emptyZipCode);
        await expect(emptyZipCode).toHaveText('Please provide your zip');
        await expect(emptyZipCode).toBeDisplayed();
    }

    async expectCountryField(){
        let emptyCountry = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.emptyCountry);
        await expect(emptyCountry).toHaveText('Please provide your country');
        await expect(emptyCountry).toBeDisplayed();
    }

    async expectZipCodeToBeNumber(){
        let zipCodeElement = await $(CHECKOUT_SHIPPING_ADDRESS_LOCATORS.selectors.zipCode);
        await expect(zipCodeElement).toHaveText(/^\d+$/,
            {
                message: 'FAIL: Zip Code must contain numbers only'
            }
        )}
}
module.exports=CheckoutShippingAddressPage;