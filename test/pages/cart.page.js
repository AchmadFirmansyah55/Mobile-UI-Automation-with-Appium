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

    async expectProductQuantityToBe(productName, expectedQuantity){
        let productAdded = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` + 
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]` + 
            `//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]`);
        let itemQuantityText = await productAdded.getAttribute('text');
        let itemQuantityValue = Number(itemQuantityText);
        await expect(itemQuantityValue).toBe(expectedQuantity);
    }

    async expectProductColorBlue(productName, expectedQuantity){
        let parent = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` +
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]`);
        let blueColor = await parent.$(`.//android.widget.ImageView[@content-desc="Displays color of selected product"][1]`);
        let quantity = await parent.$(`//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV" and @text="${expectedQuantity}"]`);
        
        let itemName = await parent.getAttribute('text');
        let itemQuantityText = await quantity.getAttribute('text');
        let itemQuantityValue = Number(itemQuantityText);

        await expect(itemName).toBe(productName);
        await expect(blueColor).toBeDisplayed();
        await expect(itemQuantityValue).toBe(expectedQuantity);
    }

    async expectProductColorGreen(productName, expectedQuantity){
        let productAdded =
    }

}
module.exports = CartPage;