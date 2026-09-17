const INVENTORY_LOCATORS = require('../locators/inventory.locator');

class InventoryPage {
    async clickBurgerButton(){
        let burgerButton = $(INVENTORY_LOCATORS.selectors.burgerButton);
        await burgerButton.click();
    }

    async clickLoginMenu(){
        let loginMenuItem = $(INVENTORY_LOCATORS.selectors.loginMenuItem);
        await loginMenuItem.click();
    }

    async clickCart(){
        let cart = $(INVENTORY_LOCATORS.selectors.cart);
        await cart.click();
    }

    async expectTitleToBeDisplayed(){
        let title = $(INVENTORY_LOCATORS.selectors.title);
        await expect(title).toBeDisplayed();
    }

    async expectNotOnProductPage(){
        let title = $(INVENTORY_LOCATORS.selectors.title);
        await expect(title).not.toBeDisplayed();
    }

    async selectProduct(productName){
        let productImage = $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]`+
        `/android.view.ViewGroup[android.widget.TextView[@content-desc="Product Title" and @text="${productName}"]]` +
        `/android.widget.ImageView[@content-desc="Product Image"]`);
        await productImage.click();
    }
}
module.exports = InventoryPage;    