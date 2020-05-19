import { browser, element, by, protractor } from "protractor";
import { pageEl } from "../Utility/pageEl";

export class HomePage{

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    bankManagerLogin = new pageEl(by.buttonText('Bank Manager Login'));
    mainHeading = new pageEl(by.className('mainHeading'));

    async navigateToBankManagerLogin(){
        await this.bankManagerLogin.click();
    }
}