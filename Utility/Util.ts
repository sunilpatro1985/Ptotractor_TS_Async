import {protractor, browser} from 'protractor';
const log = require("../config/log4js").default;

export class Util{

static async VerifyAndCloseAlert(text: string){
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 4000, "ALert not found");

    let alert = await browser.switchTo().alert();
    let alertText = await alert.getText();

    /*alertText.then(function(txt){
        log.debug(txt);
    })*/
    log.debug(alertText);
    browser.sleep(2000);
    expect<any>(alertText).toContain(text);
    await alert.accept(); 
}

static async verify_TabOrder(ArrayElements: any){
    var els = ArrayElements;
        for(var i=0; i < (els.length-1); i++){
            console.log("Before Tab - " + await els[i].getId());
            //await els[i].sendKeys(protractor.Key.TAB);
            await browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.sleep(1000);
            console.log(await (await browser.switchTo().activeElement()).getId());
            expect(await els[i+1].getId()).toBe(await (await browser.switchTo().activeElement()).getId());
        }
}

}
