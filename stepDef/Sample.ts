import {Given, When, Then, TableDefinition} from "cucumber"
var _ = require('lodash');

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

  Given(/^Profiles report screen$/, () => {
    console.log("Profiles report screen");
  });

  When(/^Fetch the profiles$/, () => {
    console.log("Fetch the profiles");
  });

  Then(/^Validate profiles$/, (table: TableDefinition) => {
    console.log("validate profiles - Display all profiles");

    var rows = table.hashes(); //based on header fetch the value, header is the key
    _.each(rows, function(row: any){
      console.log(row.Name + " " + row.Tool + " " + row.Exp);
    })

    /* var rows = table.rows(); //retuns each row as object excluding 1st row
    rows.forEach(function(value){
      console.log(value[0] + " " + value[1] + " " + value[2]);
    }) */

    /* | Key | Value|
    | UserName | "qavbox"|
    | Password | "qavbox123" | 
    var rows = table.rowsHash(); //table has to have 2 column data, excluding 1st row, column acts as key
    console.log(rows.UserName);
    console.log(rows.Password); */

  });

