import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";

const log = require("../config/log4js").default;

export class OpenAccountPage{
    custData = require("../testdata/Cust");

    /*Customers = element(by.id('userSelect'));
    options = this.Customers.all(by.tagName('option'));

    Currency = element(by.id('currency')); //$ = by.css
    Process = element(by.buttonText("Process"));*/
    Customers = new pageEl(by.id('userSelect'))
    Process = new pageEl(by.buttonText("Process"));
    Currency = new pageEl(by.id('currency'));

    name = this.custData.customers.firstname + " " + this.custData.customers.lastname;

    /*SelectACustomer(){
        let name = this.name;
        log.debug(name);
        this.options.then(function(items){
            //log4jsconfig.Log().debug("Dropdown option size " + items.length);
            log.debug("Dropdown option size " + items.length);
            for(let i=0 ; i < items.length ; i++){
                 items[i].getText().then(function(txt: any){
                     log.debug(txt);
                     if(txt == name){
                         log.debug("Item found on the list");
                         items[i].click();
                     }
                 })
            }
        })
    }*/

    /*async SelectACustomer(){
        let name = this.name;
        log.debug(name);
        log.debug("Dropdown option size " + (await this.options).length);
        log.debug("Customers count " + (await this.options).length);
        for (let i = 0; i < (await this.options).length; i++) {
            log.debug(await this.options.get(i).getText());
            if (await this.options.get(i).getText() == name) {
                await this.options.get(i).click();
            }
        }
    }*/

    async SelectACustomer(){
        let name = this.name;
        log.debug(name);
        await this.Customers.selectByOptionText(name);
    }

    async selectACustomer(name: string){
        log.debug(name);
        await this.Customers.selectByOptionText(name);
    }

    async selectACurrency(txt: string) {
        await this.Currency.selectByOptionText(txt);
    }

    async SelectDollar(){
        //await this.Currency.$('[value="Dollar"]').click();
        await this.Currency.selectByOptionText("Dollar");
    }

    async ProcessIt(){
        await this.Process.click();
        await Util.VerifyAndCloseAlert("Account created");
    } 

}