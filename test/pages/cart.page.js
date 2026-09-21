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
        const productTitle = await $(`android=new UiScrollable(new UiSelector().scrollable(true))` + `.scrollIntoView(new UiSelector().text("${productName}"))`);
        await expect(productTitle).toBeDisplayed();

        await driver.execute('mobile: scroll', {
            direction: 'up'
        });

        let productAdded = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` + 
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]` + 
            `//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV" and @text="${expectedQuantity}"]`);
        let itemQuantityText = await productAdded.getAttribute('text');
        let itemQuantityValue = Number(itemQuantityText);
        await expect(itemQuantityValue).toBe(expectedQuantity);
    }

    async expectEmptyCart(){
        let noItem = await $(CART_LOCATORS.selectors.noItem);
        await expect(noItem).toHaveText('No Items');
    }
}
module.exports = CartPage;