import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";
const log = require("../config/log4js").default;

export class AddCustomerPage{

     custData = require("../testdata/Cust");

     /*fname = element(by.model('fName'));
     lname = element(by.model('lName'));
     postalcode = element(by.model('postCd'));

     addcustomerbtn = element(by.className('btn btn-default'));*/
     fname = new pageEl(by.model('fName'));
     lname = new pageEl(by.model('lName'));
     postalcode = new pageEl(by.model('postCd'));
     inputs = new pageEl(by.tagName('input'));
     addcustomerbtn = new pageEl(by.className('btn btn-default'));


     firstname = this.custData.customers.firstname;
     lastname = this.custData.customers.lastname;
     pcode = this.custData.customers.postalcode;

     async AddCustomer(){
         this.fname.sendKeys(this.firstname);
         this.lname.sendKeys(this.lastname);
         this.postalcode.sendKeys(this.pcode);

         this.addcustomerbtn.click();
         browser.sleep(1000);
         await Util.VerifyAndCloseAlert("Customer added");
     }

     async addCustomer(fName: string, lName: string, pCode: number){
        await this.fname.sendKeys(fName);
        await this.lname.sendKeys(lName);
        await this.postalcode.sendKeys(pCode.toString());

        await this.addcustomerbtn.click();
        browser.sleep(1000);
        await Util.VerifyAndCloseAlert("Customer added");
    }

     async enter2ndInput(){
         log.debug(await this.inputs.size());
         await (await this.inputs.get(1)).sendKeys("Example");
        }
}