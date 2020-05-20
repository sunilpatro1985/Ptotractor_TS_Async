import { browser, protractor } from "protractor"
import { SignupPage } from "../pages/SignupPage";
import { Util } from "../Utility/Util";


describe("Tab order", async function(){

    it("Verify all element's tab order", async function(){
        browser.ignoreSynchronization = true; //we are testing non-angular site
    
        browser.get("https://qavbox.github.io/demo/signup/");

        var els = await new SignupPage().getTabElements();

        /*for(var i=0; i < (els.length-1); i++){
            console.log("Before Tab - " + await els[i].getId());
            //await els[i].sendKeys(protractor.Key.TAB);
            await browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.sleep(1000);
            console.log(await (await browser.switchTo().activeElement()).getId());
            expect(await els[i+1].getId()).toBe(await (await browser.switchTo().activeElement()).getId());
        }*/

        await Util.verify_TabOrder(els);

       
    })
})