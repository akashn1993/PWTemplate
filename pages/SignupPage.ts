/* -------------------------------------------------------------
* File: SignupPage.ts
* Description: Contains form actions for the user signup process.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import {Page, expect} from '@playwright/test';
import { PageManager } from '../Managers/PageManagers.ts';
import { testdata } from '../Managers/testdataManager.ts';
import {SignupPageLocators} from '../locators/SignupPageLocators.ts';  


export class SignupPage{

    SPLocators: SignupPageLocators;
    private testdata = testdata.getJSONTestdata;

    /**
     * Initialize the signup page helper with the given Playwright page.
     */
    constructor(private page: Page){
        PageManager.setPage(page);
        this.SPLocators = new SignupPageLocators();
    }

    /**
     * Fill out and submit the new user registration form using provided
     * name and email values, then verify account creation.
     */
    async newUserSignup(nameValue: any, emailValue: any){
        await expect(this.SPLocators.AccountInfoHeading.first()).toHaveText("Enter Account Information");
        await this.SPLocators.titleRadioMr.click();
        await expect(this.SPLocators.nameTextBoxSignup).toHaveValue(nameValue);
        await expect(this.SPLocators.emailTextBoxSignup).toHaveValue(emailValue);
        await this.SPLocators.passwordtextboxSignup.fill(this.testdata.NewUser.password);
        await this.SPLocators.daySignup.selectText(this.testdata.NewUser.day);
        await this.SPLocators.monthSignup.selectText(this.testdata.NewUser.month);
        await this.SPLocators.yearSignup.selectText(this.testdata.NewUser.year);
        await this.SPLocators.newsLetterSignupCheckbox.check();
        await this.SPLocators.specialOfferCheckbox.check();
        await this.SPLocators.firstNameSignup.fill(this.testdata.NewUser.firstName);
        await this.SPLocators.lastNameSignup.fill(this.testdata.NewUser.lastName);
        await this.SPLocators.companySignup.fill(this.testdata.NewUser.company);
        await this.SPLocators.addressSignup.fill(this.testdata.NewUser.address);
        await this.SPLocators.address2Signup.fill(this.testdata.NewUser.address2);
        await this.SPLocators.countrySignup.selectText(this.testdata.NewUser.country)
        await this.SPLocators.stateSignup.fill(this.testdata.NewUser.state);
        await this.SPLocators.citySignup.fill(this.testdata.NewUser.city);
        await this.SPLocators.zipCodeSignup.fill(this.testdata.NewUser.zipcode);
        await this.SPLocators.mobileNumberSignup.fill(this.testdata.NewUser.mobileNumber);
        await this.SPLocators.createAccountBtn.click();
        await expect(this.SPLocators.accountCreatedMsg).toContainText('Account Created!');
        await this.SPLocators.continueBtn.click();
}
}