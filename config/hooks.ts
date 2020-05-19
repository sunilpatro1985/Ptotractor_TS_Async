/*import { browser, Config } from 'protractor'
const log = require("../config/log4js").default;


export abstract class hooks {

let myReporter = {

    jasmineStarted: function (suiteInfo) {
        log.debug('-Jasmine Started-  SpecCount: ' + suiteInfo.totalSpecsDefined);
    },

    suiteStarted: function (result) {
        log.debug('Suite started: -' + result.fullName + '-');
    },

    specStarted: function (result) {
        log.debug(' Spec started: ' + result.fullName);
    },

 
    specDone: function (result) {
        log.debug(' Spec Done: ' + result.fullName);
       for (var i = 0; i < result.failedExpectations.length; i++) {
        log.debug('  __Failure__: ' + result.failedExpectations[i].message);
       }
       log.debug('  Pass: ' + result.passedExpectations.length);
    },

  
    suiteDone: function (result) {
        log.debug('--Suite Done-- ' + result.fullName + ' -- ' + result.status);
       for (var i = 0; i < result.failedExpectations.length; i++) {
        log.debug('  __Failure__: ' + result.failedExpectations[i].message);
       }
    },

    jasmineDone: function () {
       log.debug('-Jasmine Done-');
    }
 };

}*/