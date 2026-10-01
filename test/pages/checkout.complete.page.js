const CHECKOUT_COMPLETE_LOCATORS = require('../locators/checkout.complete.locator');

class CheckoutCompletePage{
    async expectToCheckoutCompletePage(){
        let title = await $(CHECKOUT_COMPLETE_LOCATORS.selectors.title);
        let thankyou = await $(CHECKOUT_COMPLETE_LOCATORS.selectors.thankyouText);
        let swag = await $(CHECKOUT_COMPLETE_LOCATORS.selectors.swagText);
        let order = await $(CHECKOUT_COMPLETE_LOCATORS.selectors.orderText);

        await expect(title).toHaveText('Checkout Complete');
        await expect(thankyou).toHaveText('Thank you for your order');
        await expect(swag).toHaveText('Your new swag is on its way');
        await expect(order).toHaveText('Your order has been dispatched and will arrive as fast as the pony gallops!');

        await expect(title).toBeDisplayed();
        await expect(thankyou).toBeDisplayed();
        await expect(swag).toBeDisplayed();
        await expect(order).toBeDisplayed();
    }

    async clickContinueShopping(){
        let continueShoppingButton = await $(CHECKOUT_COMPLETE_LOCATORS.selectors.continueShoppingButton);
        await continueShoppingButton.click();
    }
}

module.exports=CheckoutCompletePage;