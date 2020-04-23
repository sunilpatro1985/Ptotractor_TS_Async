import { browser, element, by, protractor } from "protractor";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { ManagerPage } from "../pages/ManagerPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { HomePage } from "../pages/HomePage";

const log = require("../config/log4js").default;

describe("Banking project test", function(){
    const custData = require("../testdata/Cust");
    
    let homePage = new HomePage();
    let addCustPage = new AddCustomerPage();
    let managerPage = new ManagerPage();
    let openAccountPage = new OpenAccountPage();
    
    beforeEach(function(){
        browser.get(custData.siteurl);
        browser.getCurrentUrl().then(function(txt){
            log.debug(txt);
        })
    })

    it("verify add customer & open account", function(){

        homePage.mainHeading.getText().then(function(txt){
            log.debug(txt);
            expect<any>(txt).toBe("XYZ Bank");
        })
        browser.sleep(2000);

        homePage.navigateToBankManagerLogin();
        managerPage.navigateToAddCustomer();
        browser.sleep(1000);
        new AddCustomerPage().AddCustomer();
        browser.sleep(1000);

        managerPage.navigateToOpenAccount();
        openAccountPage.SelectACustomer();
        browser.sleep(3000);
        openAccountPage.SelectDollar();
        browser.sleep(3000);
        openAccountPage.ProcessIt();
        browser.sleep(3000);
    })

})