import { ElementFinder, protractor, browser, element, by } from "protractor";

const log = require("../config/log4js").default;

export class pageEl{

    byEL: any;
    el!: ElementFinder;
    index: number = 0;

    constructor(byEl: any){
        this.byEL = byEl;
    }

    EC = protractor.ExpectedConditions;

    async click(){
        try{
            await (await this.getElement()).click();
            log.debug("Clicked on " + this.byEL);
        }catch(ex){
            log.debug(ex);
            throw new Error(ex);
        }
    }

    async sendKeys(text: string){
        try{
            await (await this.getElement()).sendKeys(text);
            log.debug("Entered "+ text + " on " + this.byEL);
        }catch(ex){
            log.debug(ex);
            throw new Error(ex);
        }
    }

    async getText(elementText: string): Promise<string>{
        try{
            let text = await (await this.getElement()).getText();
            //log.debug("Fetched  value as "+ text + " from " + this.byEL);
            log.debug("Fetched  value as "+ text + " from " + elementText);
            return text;
        }catch(ex){
            log.debug(ex);
            throw new Error(ex);
        }
    }

    async waitForEl(){
        await browser.wait(this.EC.presenceOf(element(this.byEL)), 30000, 'Element didnot found');
    }

    async getElement(): Promise<ElementFinder>{
        await this.waitForEl();
        if(this.index == 0){
            this.el = element(this.byEL);
        }else{
            this.el = element.all(this.byEL).get(this.index);
        }
        return this.el;
    }

    async getElements(): Promise<ElementFinder[]>{
        await this.waitForEl();
        return element.all(this.byEL).asElementFinders_();
    }

    async size(): Promise<number>{
        return (await this.getElements()).length;
    }

    async get(index: number){
        this.index = index;
        return this;
    }

    async getId(){
        return (await this.getElement()).getId();
    }

    //elem.get(9).getText();
    //this.radiobtns.get(6).click()

    async selectByOptionText(text: string){
        try{
            await (await this.getElement()).element(by.xpath('option[.= "' + text + '"]')).click();
            log.debug("Selected " + text + " from " + this.byEL);
        }
        catch(ex){
            log.debug(ex);
            throw new Error(ex);
        }
    }


}