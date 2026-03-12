/* -------------------------------------------------------------
* File: LoginPageLocators.ts
* Description: Playwright locators for the login/signup form screens.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import {Locator} from '@playwright/test';
import { PageManager } from '../Managers/PageManagers.ts';

export class LoginPageLocators{

    // heading shown when registering a new user
    get newUserHeading(): Locator{
        return PageManager.page.getByText('New User Signup!');
    }

    // textbox for entering name
    get nameTextBox(): Locator{
        return PageManager.page.getByRole('textbox', { name:'name'});
    }                           

    // email field within the signup form
    get emailTextBox(): Locator{
        return PageManager.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    }   

    // submit button for signup
    get signupSubmitBtn(): Locator{
        return PageManager.page.getByRole('button', { name: 'Signup' });
    }

} 