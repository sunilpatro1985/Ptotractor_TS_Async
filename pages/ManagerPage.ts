import { browser, element, by, protractor, ProtractorExpectedConditions } from "protractor";

export class ManagerPage{

    //addCustomer = element(by.xpath('//button[text(),"Add Customer"]'));
    addCustomer = element(by.buttonText('Add Customer'));
    openAccount = element(by.buttonText('Open Account'));
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
		


		