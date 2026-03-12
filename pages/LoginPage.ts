/* -------------------------------------------------------------
* File: LoginPage.ts
* Description: Encapsulates actions on the login/signup page along with computed test data.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { Page, expect } from '@playwright/test';
import { testdata } from '../Managers/testdataManager.ts';
import { PageManager } from '../Managers/PageManagers.ts';

import {LoginPageLocators} from '../locators/LoginPageLocators.ts'; 



export class LoginPage{
    LPLocators: LoginPageLocators;

    private static jsonTestdata = testdata.getJSONTestdata
    static name = this.jsonTestdata.NewUser.username;
    private static timesp = Date.now().toString();
    static email = this.jsonTestdata.NewUser.email.replace('#timestamp#',this.timesp);

    /**
     * Set the current page and prepare locators for login actions.
     */
    constructor(private page: Page){
        PageManager.setPage(page);
        this.LPLocators = new LoginPageLocators();  
    }

    /**
     * Fill the signup form with generated credentials and submit.
     */
    async signupLogin(){
        await expect(this.LPLocators.newUserHeading).toBeVisible();
        await this.LPLocators.nameTextBox.fill(LoginPage.name);
        await this.LPLocators.emailTextBox.fill(LoginPage.email);
        await this.LPLocators.signupSubmitBtn.click();   
}
}