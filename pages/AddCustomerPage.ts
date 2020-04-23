import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";

export class AddCustomerPage{

     custData = require("../testdata/Cust");

     fname = element(by.model('fName'));
     lname = element(by.model('lName'));
     postalcode = element(by.model('postCd'));

     addcustomerbtn = element(by.className('btn btn-default'));

     firstname = this.custData.customers.firstname;
     lastname = this.custData.customers.lastname;
     pcode = this.custData.customers.postalcode;

     AddCustomer(){
         this.fname.sendKeys(this.firstname);
         this.lname.sendKeys(this.lastname);
         this.postalcode.sendKeys(this.pcode);

         this.addcustomerbtn.click();
         browser.sleep(1000);
         Util.VerifyAndCloseAlert("Customer added");
     }
}