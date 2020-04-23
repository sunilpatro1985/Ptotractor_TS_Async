import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";

const log = require("../config/log4js").default;

export class OpenAccountPage{
    custData = require("../testdata/Cust");

    Customers = element(by.id('userSelect'));
    options = this.Customers.all(by.tagName('option'));

    Currency = element(by.id('currency')); //$ = by.css
    Process = element(by.buttonText("Process"));

    name = this.custData.customers.firstname + " " + this.custData.customers.lastname;

    SelectACustomer(){
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
    }

    SelectDollar(){
        this.Currency.$('[value="Dollar"]').click();
    }

    ProcessIt(){
        this.Process.click();
        Util.VerifyAndCloseAlert("Account created");
    } 

}

