import { browser, element, by, protractor } from "protractor";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { ManagerPage } from "../pages/ManagerPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { HomePage } from "../pages/HomePage";

const log = require("../config/log4js").default;

describe("Banking project test", async function(){
    const custData = require("../testdata/Cust");
    
    let homePage = new HomePage();
    let addCustPage = new AddCustomerPage();
    let managerPage = new ManagerPage();
    let openAccountPage = new OpenAccountPage();
    
    beforeEach(async function(){
        await browser.get(custData.siteurl);
        /*browser.getCurrentUrl().then(function(txt){
            log.debug(txt);
        })*/
        log.debug(await browser.getCurrentUrl());
    })

    xit("verify add customer & open account", async function(){

        /*homePage.mainHeading.getText().then(function(txt){
            log.debug(txt);
            expect<any>(txt).toBe("XYZ Bank");
        })*/
        //expect<any>(await homePage.mainHeading.getText()).toBe("XYZ Bank");
        //log.debug(await homePage.mainHeading.getText());
        browser.sleep(2000);

        await homePage.navigateToBankManagerLogin();
        //browser.sleep(1000);
        await managerPage.navigateToAddCustomer();
        //browser.sleep(1000);
        await new AddCustomerPage().AddCustomer();
        //browser.sleep(1000);

        await managerPage.navigateToOpenAccount();
        //browser.sleep(2000);
        await openAccountPage.SelectACustomer();
        //browser.sleep(3000);
        await openAccountPage.SelectDollar();
        //browser.sleep(3000);
        await openAccountPage.ProcessIt();
        browser.sleep(3000);
    })
    it("verify add customer & open account", async function(){

        /*homePage.mainHeading.getText().then(function(txt){
            log.debug(txt);
            expect<any>(txt).toBe("XYZ Bank");
        })*/
        expect<any>(await homePage.mainHeading.getText("SiteMainHeader")).toBe("XYZ Bank");
        log.debug(await homePage.mainHeading.getText("SiteMainHeader"));
        browser.sleep(2000);

        await homePage.navigateToBankManagerLogin();
        //browser.sleep(1000);
        await managerPage.navigateToAddCustomer();
        await addCustPage.enter2ndInput();
        browser.sleep(3000);
    })

})