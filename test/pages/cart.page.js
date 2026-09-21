const CART_LOCATORS = require ('../locators/cart.locator');

class CartPage{
    async clickProceedToCheckout(){
        let checkout = await $(CART_LOCATORS.selectors.checkoutButton);
        await checkout.click();
    }

    async expectTotalItemsIsTrue(total){
        let totalItem = await $(CART_LOCATORS.selectors.totalItem);
        await expect(totalItem).toBeDisplayed();
        let totalItemText = await totalItem.getAttribute('text');
        let totalItemNumber = parseFloat(totalItemText.replace(' Items',''));
        await expect(totalItemNumber).toBe(Number(total));
    }

    async expectTotalItemsIsDisplayed(){
        let totalItem = await $(CART_LOCATORS.selectors.totalItem);
        await expect(totalItem).toBeDisplayed();
    }

    async expectTotalPriceIsDisplayed(){
        let totalPrice = await $(CART_LOCATORS.selectors.totalItem);
        await expect(totalPrice).toBeDisplayed();
    }

    async expectProductInCartToBe(productName, expectedQuantity){
        let parentWithName = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` + 
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]`);

        let quantityElement = await parentWithName.$(`.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]`);

        let quantityText = await quantityElement.getAttribute('text');
        let quantityValue = Number(await quantityText);
        await expect(quantityValue).toBe(expectedQuantity);
    }

    async expectSecondProductToBe(productName, expectedQuantity){
        await $(`android=new UiScrollable(new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/scrollView")).scrollForward()`);
        
        let parentWithName = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` + 
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]`);

        let quantityElement = await parentWithName.$(`.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]`);

        let quantityText = await quantityElement.getAttribute('text');
        let quantityValue = Number(await quantityText);
        await expect(quantityValue).toBe(expectedQuantity);
    }

    async expectEmptyCart(){
        let noItem = await $(CART_LOCATORS.selectors.noItem);
        await expect(noItem).toHaveText('No Items');
    }
}
module.exports = CartPage;