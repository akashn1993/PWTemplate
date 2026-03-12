/* -------------------------------------------------------------
* File: multiFunPage.ts
* Description: Handles a variety of UI interactions used in the multi-function spec.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { Page, expect } from '@playwright/test'
import { PageManager  } from '../Managers/PageManagers';
import { testdata } from '../Managers/testdataManager'

import { testAutoPageLocators } from "../locators/testAutoPageLocators";


export class mutipleFunPage{

    private APLocator: testAutoPageLocators;
    private jsonTestdata = testdata.getJSONTestdata;
    private page: Page;

    /**
     * Store provided Playwright page and initialize the locators object.
     */
    constructor(page: Page){
        this.page=page;
        PageManager.setPage(page);
        this.APLocator = new testAutoPageLocators();
    }

    /**
     * Navigate to the multi-function demo URL.
     */
    async luanchURL(){
        await PageManager.page.goto(this.jsonTestdata.URL1)
    }
    
    /**
     * Trigger a simple alert and accept it, capturing the message.
     */
    async handleSimpleAlert(){
        let message: any;
        PageManager.page.once('dialog', async dialog => {
            message = dialog.message();
            await dialog.accept();
        })
        await this.APLocator.simpleAlertBtn.click();
        console.log('Message on the alert::::::::',message);
    }

    /**
     * Accept a confirmation alert and log its message.
     */
    async acceptConfirmAlert(){
        let message: any;
        PageManager.page.once('dialog', dialog =>{
            message = dialog.message();
            dialog.accept()
        })
        await this.APLocator.confirmationAlertBtn.click();
        console.log('Message on the alert::::::::',message);
    }

    /**
     * Dismiss a confirmation alert and log its message.
     */
    async dismissConfirmAlert(){
        let message: any;
        PageManager.page.once('dialog', dialog =>{
            message = dialog.message();
            dialog.dismiss()
        })
        await this.APLocator.confirmationAlertBtn.click();
        console.log('Message on the alert::::::::',message);
    }

    /**
     * Handle a prompt alert by entering text and accepting it.
     */
    async acceptPrompAlert(){
        let message: any;
        let defaulttext: any;
        PageManager.page.once('dialog', dialog  => {
            message = dialog.message()
            defaulttext = dialog.defaultValue()
            dialog.accept('Test123');
        })
        await this.APLocator.prompAlertBtn.click();
        console.log('Message on the alert::::::::',message)
        console.log('Default value on the alert text box::::::::',defaulttext)

    }

    /**
     * Handle a prompt alert by dismissing it and logging values.
     */
    async cancelPrompAlert(){
        let message: any;
        let defaulttext: any;
        PageManager.page.once('dialog', dialog  => {
            message = dialog.message()
            defaulttext = dialog.defaultValue()
            dialog.dismiss()
        })
        await this.APLocator.prompAlertBtn.click();
        console.log('Message on the alert::::::::',message)
        console.log('Default value on the alert text box:::::::',defaulttext)
        
    }

    /**
     * Open a new tab, interact with it, then switch back to the main page.
     */
    async multiTab(){
        const [tab1] = await Promise.all([
            PageManager.page.waitForEvent('popup'),
            this.APLocator.newTabBtn.click()
        ])
        PageManager.setPage(tab1);
        await PageManager.page.bringToFront();
        console.log(await this.APLocator.vistCount.textContent())
        PageManager.setPage(this.page);
        await PageManager.page.bringToFront();
        await this.APLocator.GUIElemntLink.click();        
    }

    /**
     * Switch focus to a page whose title contains the given string,
     * then verify a heading is visible on that page.
     */
    async switchPageTitle(Pagetitle: any){
        const mainPage = PageManager.page;
        await Promise.all([
            PageManager.page.context().waitForEvent('page'),
            this.APLocator.popupWindowBtn.click()
        ])
        await PageManager.page.waitForTimeout(2000)
        const allPages =  PageManager.page.context().pages()
        console.log('Total number of windows including main windows page are',allPages.length)

        for(const reqPage of allPages){
            PageManager.setPage(reqPage);
            if((await PageManager.page.title()).includes(Pagetitle)){
                await PageManager.page.bringToFront();
                break;
            }
        }
        await expect(this.APLocator.gettingStartSelenium).toBeVisible()
        }
  

}