import * as fs from "fs";
let mkdirp = require("mkdirp");
let path = require('path');
let reporter = require('cucumber-html-reporter');

var jsonReports = path.join(process.cwd(),"/reports/json");
var htmlReports = path.join(process.cwd(),"/reports/html");
var targetJson = path.join(jsonReports + "/cucumber_report.json");

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
    metadata: {
        "App Name": "XYZ bank",
        "Platform": "Mac OS" }
};

export class Reporter {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file." + err);
            }
        }
    }
}