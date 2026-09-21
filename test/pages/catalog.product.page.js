const CATALOG_PRODUCT_LOCATORS = require('../locators/catalog.product.locator');

class CatalogProductPage {
    async clickBurgerButton(){
        let burgerButton = $(CATALOG_PRODUCT_LOCATORS.selectors.burgerButton);
        await burgerButton.click();
    }

    async clickLoginMenu(){
        let loginMenuItem = $(CATALOG_PRODUCT_LOCATORS.selectors.loginMenuItem);
        await loginMenuItem.click();
    }

    async clickCart(){
        let cart = $(CATALOG_PRODUCT_LOCATORS.selectors.cart);
        await cart.click();
    }

    async expectTitleToBeDisplayed(){
        let title = $(CATALOG_PRODUCT_LOCATORS.selectors.title);
        await expect(title).toBeDisplayed();
    }

    async expectNotOnProductPage(){
        let title = $(CATALOG_PRODUCT_LOCATORS.selectors.title);
        await expect(title).not.toBeDisplayed();
    }

    async selectProduct(productName){
        let productImage = $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]`+
        `/android.view.ViewGroup[android.widget.TextView[@content-desc="Product Title" and @text="${productName}"]]` +
        `/android.widget.ImageView[@content-desc="Product Image"]`);
        await productImage.click();
    }

    async scrollProduct(productName){
        const productTitle = await $(`android=new UiScrollable(new UiSelector().scrollable(true))` + 
            `.scrollIntoView(new UiSelector().text("${productName}"))`);
        await expect(productTitle).toBeDisplayed();
    }
}
module.exports = CatalogProductPage;    