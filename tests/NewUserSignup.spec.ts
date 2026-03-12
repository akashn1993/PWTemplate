/** -------------------------------------------------------------
* File: NewUserSignup.spec.ts
* Description: Test for registering a new user through the UI and
*              validating login and deletion.
* Author: Akash Nallabelli
* Notes: Uses PageManager and objectManager helpers to abstract
*       Playwright page and page actions, similar to API helpers.
-------------------------------------------------------------
*/

import {test} from '@playwright/test';
import { PageManager } from '../Managers/PageManagers';
import { objectManager } from '../Managers/objectManager';

import { LoginPage } from '../pages/LoginPage'

// set the current page for PageManager before each test
test.beforeEach(async ({page})=>{
    PageManager.setPage(page);
})

// new user registration flow
test('New User registration', { tag: ['@NewUserRegistration', '@Regression'] }, async () => {
    await objectManager.HomePage.launchURL();
    await objectManager.HomePage.validateHome();
    await objectManager.HomePage.clickSignup();
    await objectManager.LoginPage.signupLogin();
    const name = LoginPage.name;
    const email = LoginPage.email;
    await objectManager.SignupPage.newUserSignup(name, email);
    await objectManager.HomePage.validateLoginAs(name);
    await objectManager.HomePage.clickDelete();
});