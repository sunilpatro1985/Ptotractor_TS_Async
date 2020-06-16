import {Given, When, Then} from "cucumber"

Given(/^Profile entry screen$/, () => {
    console.log("Profile entry screen");
  });

  When(/^Enter Name ([^"]*)$/, (name: string) => {
    console.log("Enter Name " + name);
  });

  Then(/^Enter Tool ([^"]*)$/, (Tool: string) => {
    console.log("Enter Tool " + Tool);
  });

  Then(/^Enter Exp ([^"]*)$/, (Exp: string) => {
    console.log("Enter Exp " + Exp);
  });

  Then(/^validate profiles saved with out error$/, () => {
    console.log("validate profiles saved with out error");
  });