import { browser, element, by, protractor, ProtractorExpectedConditions } from "protractor";
import { pageEl } from "../Utility/pageEl";

export class ManagerPage{

    //addCustomer = element(by.xpath('//button[text(),"Add Customer"]'));
    addCustomer = new pageEl(by.buttonText('Add Customer'));
    openAccount = new pageEl(by.buttonText('Open Account'));
    public static ExpectedCondition: ProtractorExpectedConditions = protractor.ExpectedConditions;

    async navigateToAddCustomer(){
        /*browser.wait(ManagerPage.ExpectedCondition.presenceOf(this.addCustomer), 5000).then(() => {
            this.addCustomer.click()
        })*/
        await this.addCustomer.click();
    }

    async navigateToOpenAccount(){
        await this.openAccount.click();
    }
}
		


		