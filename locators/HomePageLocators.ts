/* -------------------------------------------------------------
* File: HomePageLocators.ts
* Description: Locator getters for the home page elements. These are simple accessor methods.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import {Locator} from '@playwright/test';
import { PageManager } from '../Managers/PageManagers.ts';


export class HomePageLocators{


    /**
     * Locator for the featured items section on the home page.
     */
    get home_FeaturedSection(): Locator{
        return PageManager.page.locator('.features_items')
    }

    /**
     * Locator for the signup/login button.
     */
    get signupBtn(): Locator{
        return PageManager.page.getByText('Signup / Login');
    }

    /**
     * Locator for the element showing "Logged in as" text.
     */
    get loginAs(): Locator{
        return PageManager.page.getByText('Logged in as');
    }

    /**
     * Locator for the "Delete Account" link.
     */
    get deleteBtn(): Locator{
        return PageManager.page.getByRole('link', { name: 'Delete Account' });
    }

    /**
     * Locator for the "Account Deleted!" confirmation message.
     */
    get accountDeletedText(): Locator{
        return PageManager.page.getByText('Account Deleted!');
    }

    /**
     * Locator for the continue link after deletion.
     */
    get continueBtn(): Locator{
        return PageManager.page.getByRole('link', {name: 'Continue'});
    }


}   