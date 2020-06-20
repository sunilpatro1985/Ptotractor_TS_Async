const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { HookScenarioResult } from 'cucumber';
const log = require("../config/log4js").default;
import { browser, element, by, protractor, Browser } from "protractor";

let App = require("../TestData/Cust");

BeforeAll(async () => {
    try {
        log.debug("BeforeAll")
        await browser.get(App.siteurl);
        await browser.sleep(2000);
    }
    catch (e) {
        log.debug('Error in BeforeAll: ', e)
    }
})

After(async (scenario: any) => {
    if (scenario.result.status = Status.Failed) {
        const screenShot = await browser.takeScreenshot();
        const img = Buffer.alloc(screenShot.length, screenShot, 'base64');
        scenario.attach(img, 'image/png');
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    try {
        log.debug("AfterAll");
        await browser.quit();
    }
    catch (e) {
        log.debug('Failed to quit browser: ', e)
    }
});