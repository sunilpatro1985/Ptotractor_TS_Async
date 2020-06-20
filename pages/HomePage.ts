import { browser, element, by, protractor } from "protractor";
import { pageEl } from "../Utility/pageEl";

export class HomePage{

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    home = new pageEl(by.buttonText('Home'));
    bankManagerLogin = new pageEl(by.buttonText('Bank Manager Login'));
    mainHeading = new pageEl(by.className('mainHeading'));

    async navigateToHomePage(){
        await this.home.click();
    }

    async navigateToBankManagerLogin(){
        await this.bankManagerLogin.click();
    }
}