import { pageEl } from "../Utility/pageEl";
import { by } from "protractor";

export class SignupPage{
    fname = new pageEl(by.id('username'));
    email = new pageEl(by.id('email'));
    tel = new pageEl(by.id('tel'));
    uploadFile = new pageEl(by.name('datafile'));
    gender = new pageEl(by.name('sgender'));

    async getTabElements(){
        await this.fname.click();
        return new Array(this.fname, this.email, this.tel, this.uploadFile, this.gender);
    }

}