import { browser, element, by, protractor } from "protractor";

const log = require("../config/log4js").default;

describe("Fetch the params / global file parameters", function(){

    it("print the global parameters", function(){

     console.log("Reading conf.ts params section");
     console.log("Getting single key value - " + browser.params.appUrl);
  
     var customers = browser.params.customer;
     console.log(customers);

     for (let customer of customers) {
        console.log(customer);
        console.log(customer.firstName);
        console.log(customer.lastName);
        console.log(customer.postCode);
     }

    })

    xit("print the global  appglobals.ts parameters", function(){

        console.log("Reading appglobals.ts params section");
        console.log("Getting single key value - " + browser.appGlobal.appUrl);
     
        var customers = browser.appGlobal.customer;
        console.log(customers);
   
        for (let customer of customers) {
           console.log(customer);
           console.log(customer.firstName);
           console.log(customer.lastName);
           console.log(customer.postCode);
        }
   
       })

    
})