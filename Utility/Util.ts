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

}
