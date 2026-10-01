const CHECKOUT_REVIEW_LOCATORS = require('../locators/checkout.review.locator');

class CheckoutReviewPage {
    async expectToCheckoutReviewPage(){
        let title = await $(CHECKOUT_REVIEW_LOCATORS.selectors.title);
        await expect(title).toBeDisplayed();
        await expect(title).toHaveText('Review your order');
    }

    async clickPlaceOrder(){
        let placeOrderButton = await $(CHECKOUT_REVIEW_LOCATORS.selectors.placeOrderButton);
        await placeOrderButton.click();
    }

    async expectDeliverAddress({fullname, address, city, country}){
        await $(`android=new UiScrollable(new UiSelector().scrollable(true))` + `.scrollToEnd(10)`);
        let title = await $(CHECKOUT_REVIEW_LOCATORS.selectors.deliverAddressText);
        let fullnameElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.fullname); 
        let addressElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.address); 
        let cityElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.city); 
        let countryElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.country);
        await expect(title).toHaveText('Deliver Address');
        await expect(fullnameElement).toHaveText(fullname);
        await expect(addressElement).toHaveText(address);
        await expect(cityElement).toHaveText(city);
        await expect(countryElement).toHaveText(country);

        await expect(title).toBeDisplayed();
        await expect(fullnameElement).toBeDisplayed();
        await expect(addressElement).toBeDisplayed();
        await expect(cityElement).toBeDisplayed();
        await expect(countryElement).toBeDisplayed();
    }

    async expectPaymentMethod({cardHolder, cardNumber, expirationDate}){
        let title = await $(CHECKOUT_REVIEW_LOCATORS.selectors.paymentMethodText);
        let cardHolderElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.cardHolder); 
        let cardNumberElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.cardNumber); 
        let expirationDateElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.expirationDate); 
        
        await expect(title).toHaveText('Payment Method');
        await expect(cardHolderElement).toHaveText(cardHolder);
        await expect(cardNumberElement).toHaveText(cardNumber);
        await expect(expirationDateElement).toHaveText(expirationDate);

        await expect(title).toBeDisplayed();
        await expect(cardHolderElement).toBeDisplayed();
        await expect(cardNumberElement).toBeDisplayed();
        await expect(expirationDateElement).toBeDisplayed();
    }

    async expectBillingAddress({billingFullName, billingAddress, billingCityAndState, billingZipAndCountry}){
        let title = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingAddressText);
        let billFullnameElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingFullName); 
        let billAddressElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingAddress); 
        let billCityElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingCityAndState); 
        let billCountryElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingZipAndCountry);
        await expect(title).toHaveText('Billing Address');
        await expect(billFullnameElement).toHaveText(billingFullName);
        await expect(billAddressElement).toHaveText(billingAddress);
        await expect(billCityElement).toHaveText(billingCityAndState);
        await expect(billCountryElement).toHaveText(billingZipAndCountry);

        await expect(title).toBeDisplayed();
        await expect(billFullnameElement).toBeDisplayed();
        await expect(billAddressElement).toBeDisplayed();
        await expect(billCityElement).toBeDisplayed();
        await expect(billCountryElement).toBeDisplayed();
    }

    async expectBillingAddressIsTheSame(){
        let title = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingAddressText);
        let message = await $(CHECKOUT_REVIEW_LOCATORS.selectors.billingAddressSame);
        await expect(message).toHaveText('Billing address is the same as shipping address');
        await expect(message).toBeDisplayed();
        await expect(title).not.toBeDisplayed();
    }

    async expectDHLStandardDelivery(){
        let DHLtext = await $(CHECKOUT_REVIEW_LOCATORS.selectors.DHLStandardDeliveryText);
        let tax = await $(CHECKOUT_REVIEW_LOCATORS.selectors.taxAmount);
        let arrival = await $(CHECKOUT_REVIEW_LOCATORS.selectors.arrival);
        await expect(DHLtext).toHaveText('DHL Standard Delivery');
        await expect(tax).toHaveText('$5.99');
        await expect(arrival).toHaveText('Estimated to arrive within 3 weeks.');

        await expect(DHLtext).toBeDisplayed();
        await expect(tax).toBeDisplayed();
        await expect(arrival).toBeDisplayed();
    }

    async expectTotalItems(itemNumber){
        let totalItemElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.itemNumber);
        let totalText = await totalItemElement.getText();
        let totalItemNumber = totalText.replace(' Items', '');
        await expect(Number(totalItemNumber)).toBe(Number(itemNumber));
    }

    async expectTotalAmount(totalAmount){
        let totalAmountElement = await $(CHECKOUT_REVIEW_LOCATORS.selectors.totalAmount);
        let totalText = await totalAmountElement.getText();
        let replaceText = totalText.replace('$', '');
        let replaceComa = replaceText.replace(',', '.');
        let convertToNumber = parseFloat(replaceComa);
        await expect(convertToNumber).toBe(Number(totalAmount));
    }

    async expectProductInCheckoutReview(productName){
        let productAdded = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` +
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]`);
        await expect(productAdded).toBeDisplayed();
    }
}

module.exports=CheckoutReviewPage;