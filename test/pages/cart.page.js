const CART_LOCATORS = require ('../locators/cart.locator');
const sharp = require ('sharp');

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
        let productAdded = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]` + 
            `/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text="${productName}"]]` + 
            `//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV" and @text="${expectedQuantity}"]`);
        let itemQuantityText = await productAdded.getAttribute('text');
        let itemQuantityValue = Number(itemQuantityText);
        await expect(itemQuantityValue).toBe(expectedQuantity);
    }

    async expectSecondProductToBe(productName, expectedQuantity){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
        
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

    async expectColorIsBlue(productName){
        let parent = await $(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays list of selected products"]/android.view.ViewGroup[.//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/titleTV" and @text ="${productName}"]]`);
        let colorElement = await parent.$(`.//android.widget.ImageView[@content-desc="Displays color of selected product"]`);
        const location = await colorElement.getLocation(); 
        const size = await colorElement.getSize();

        const x = location.x;
        const y = location.y;
        const width = size.width;
        const height = size.height;
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let validPixel = 0;

        const screenshot = await browser.takeScreenshot();
        const imageBuffer = Buffer.from(screenshot, 'base64');

        const { data, info } = await sharp(imageBuffer).raw().toBuffer({ resolveWithObject: true });

        for (let py=0;py<height;py++){
            for (let px=0;px<width;px++){
                const pixelX = x + px;
                const pixelY = y + py;

                const index = (pixelY * info.width + pixelX) * 3;
                const r = data[index];
                const g = data[index+1];
                const b = data[index+2];

                if(!(r>245 && g>245&& b>245)){
                    totalR = totalR + r;
                    totalG = totalG + g;
                    totalB = totalB + b;
                    validPixel++
                }
            }
        }
        const averageR = totalR/validPixel;
        const averageG = totalG/validPixel;
        const averageB = totalB/validPixel;

        let blueBenchmark = {r:14, g:117, b:221};
        let differenceR = Math.abs(averageR-blueBenchmark.r)
        let differenceG = Math.abs(averageG-blueBenchmark.g)
        let differenceB = Math.abs(averageB-blueBenchmark.b)
        
        let bluePercentage = {
            r:(100-(differenceR/255*100)),
            g:(100-(differenceG/255*100)),
            b:(100-(differenceB/255*100))
        }
        await expect(bluePercentage.r).toBeGreater(90);
        await expect(bluePercentage.g).toBeGreater(90);
        await expect(bluePercentage.b).toBeGreater(90);
    }
}
module.exports = CartPage;