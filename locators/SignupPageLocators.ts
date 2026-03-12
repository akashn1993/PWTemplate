/* -------------------------------------------------------------
* File: SignupPageLocators.ts
* Description: A comprehensive set of locators for the signup form and account creation flow.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import {Locator} from '@playwright/test';
import { PageManager } from '../Managers/PageManagers.ts';

export class SignupPageLocators{
        
    // heading for account information section
    get AccountInfoHeading() : Locator{
        return PageManager.page.locator('.login-form h2 b');
    }
    // title radio button (Mr.)
    get titleRadioMr() : Locator{
        return PageManager.page.getByRole('radio', {name: 'Mr.'});
    }
    // input fields for name and email
    get nameTextBoxSignup() : Locator{
        return PageManager.page.locator('#name');
    }
    get emailTextBoxSignup() : Locator{ 
        return PageManager.page.locator('[name="email_address"]');
    }
    // password textbox
    get passwordtextboxSignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'Password'});
    }
    // date of birth selectors
    get daySignup() : Locator{
        return PageManager.page.locator('#days');
    }
    get monthSignup() : Locator{
        return PageManager.page.locator('#months');
    }
    get yearSignup() : Locator{
        return PageManager.page.locator('#years');
    }
    // newsletter and offers checkboxes
    get newsLetterSignupCheckbox() : Locator{
        return PageManager.page.getByRole('checkbox', {name: 'Sign up for our newsletter!'});
    }
    get specialOfferCheckbox() : Locator{
        return PageManager.page.getByRole('checkbox', {name: 'Receive special offers from our partners!'});
    }
    // personal information fields
    get firstNameSignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'First name'});
    }
    get lastNameSignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'Last name'});
    }
    get companySignup() : Locator{
        return PageManager.page.getByRole('textbox', { name: 'Company', exact: true });
    }
    get addressSignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'Address *'});
    }
    get address2Signup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'Address 2'});
    }
    get countrySignup() : Locator{
        return PageManager.page.getByRole('combobox', {name: 'Country'});
    }
    get stateSignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'State'});
    }
    get citySignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'City'});
    }
    get zipCodeSignup() : Locator{
        return PageManager.page.locator('#zipcode');
    }
    get mobileNumberSignup() : Locator{
        return PageManager.page.getByRole('textbox', {name: 'Mobile Number'});
    }
    // action buttons and messages
    get createAccountBtn() : Locator{
        return PageManager.page.getByRole('button', {name: 'Create Account'})
    }
    get accountCreatedMsg() : Locator{
        return PageManager.page.locator('b');
    }
    get continueBtn() : Locator{
        return PageManager.page.getByRole('link', {name: 'Continue'});
    }

} 