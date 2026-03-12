/* -------------------------------------------------------------
* File: FramesPage.ts
* Description: Contains methods for navigating and interacting with nested frames on the test page.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { FrameLocator, Page } from '@playwright/test'
import { PageManager } from '../Managers/PageManagers'
import { testdata } from '../Managers/testdataManager'

import { FramesPageLocators } from '../locators/FramesPageLocators'

export class FramesPage{

    private jsonTestData = testdata.getJSONTestdata
    private page: Page;
    private FPLocators: FramesPageLocators;

     
    /**
     * Store the passed Playwright page and initialize locators.
     */
    constructor(page: Page){
            this.page = page;
            PageManager.setPage(page);
            this.FPLocators = new FramesPageLocators();
            }

    /**
     * Go to the URL defined for frames testing.
     */
    async launchURL(){
        await PageManager.page.goto(this.jsonTestData.URL2)
    }

    /**
     * Log the number of frames present on the current page.
     */
    async framesFuc(){
        const frmes = PageManager.page.frames()
        console.log(frmes.length)
    }

    /**
     * Demonstrate switching and interacting with nested frames.
     */
    async frameSwitch(){
        const frame2 = PageManager.page.frameLocator(this.FPLocators.frame2_Id)
        await frame2.locator(this.FPLocators.firstName_ID).fill('test in frame2')
        const frame3 = PageManager.page.frameLocator(this.FPLocators.frame3_Id)
        await frame3.locator(this.FPLocators.textBox_Id).fill('test in frame3')
        const frame2in3 = frame3.frameLocator(this.FPLocators.frame2_Id)
        await frame2in3.locator(this.FPLocators.firstName_ID).fill('test frame2 in frame3')
        await PageManager.page.locator(this.FPLocators.textBox_Id).fill('Textbox in main page')
        await PageManager.page.waitForTimeout(5000)

    }
}