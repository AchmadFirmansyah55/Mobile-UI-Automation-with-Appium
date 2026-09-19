const CATALOG_PRODUCT_LOCATORS = require('../locators/catalog.product.locator');
const DETAIL_PRODUCT_LOCATORS = require('../locators/detail.product.locator');

class DetailProductPage {
    async clickCartIcon(){
        let cartIcon = $(DETAIL_PRODUCT_LOCATORS.selectors.cartIcon);
        await cartIcon.click()
    }

    async clickAddCartButton(){
        let addToCart = await $(DETAIL_PRODUCT_LOCATORS.selectors.addProductButton);
        await addToCart.click();
    }

    async clickPlusQuantity(clickCount=0){
        let plusQuantity = await $(DETAIL_PRODUCT_LOCATORS.selectors.plusQuantity);
        for(let i=1;i<=clickCount;i++){
            await plusQuantity.click();
        }
    }

    async clickMinusQuantity(clickCount=0){
        let minusQuantity = await $(DETAIL_PRODUCT_LOCATORS.selectors.minusQuantity);
        for(let i=1;i<=clickCount;i++){
            await minusQuantity.click();
        }
    }

    async expectProductName(name){
        let productName = await $(DETAIL_PRODUCT_LOCATORS.selectors.productName);
        await expect(productName).toHaveText(name);
        await expect(productName).toBeDisplayed();
    }

    async expectItemQuantity(Quantity){
        let itemQuantity = await $(DETAIL_PRODUCT_LOCATORS.selectors.itemQuantity);
        let quantityText = await itemQuantity.getAttribute('text');
        let quantityValue = Number(quantityText);
        await expect(quantityValue).toBe(Number(Quantity));
    }

    async pickColor(colorVariant){
        let color = await $(`//android.widget.ImageView[@content-desc="${colorVariant} color"]`);
        await color.click();
    }

    async expectCartIconCount(Quantity){
        let cartIcon = await $(CATALOG_PRODUCT_LOCATORS.selectors.cartQuantity);
        let cartIconText = await cartIcon.getAttribute('text');
        let cartIconCount = Number(cartIconText);
        await expect(cartIconCount).toBe(Number(Quantity));
    }

    async expectCartIconCountIsDisplayed(){
        let cartIcon = await $(CATALOG_PRODUCT_LOCATORS.selectors.cartQuantity);
        await expect(cartIcon).toBeDisplayed();
    }
}

module.exports = DetailProductPage;