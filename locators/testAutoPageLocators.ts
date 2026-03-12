/* -------------------------------------------------------------
* File: testAutoPageLocators.ts
* Description: Locators for miscellaneous UI elements used in the multi-function tests.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { Locator} from '@playwright/test'
import { PageManager } from "../Managers/PageManagers";

export class testAutoPageLocators{

    // simple alert button
    get simpleAlertBtn(): Locator{
        return PageManager.page.getByRole('button', {name: 'Simple Alert'});
    }

    // confirmation alert button
    get confirmationAlertBtn(): Locator{
        return PageManager.page.getByRole('button', {name: 'Confirmation Alert'});
    }

    // prompt alert button
    get prompAlertBtn(): Locator{
        return PageManager.page.getByRole('button', {name: 'Prompt Alert'});
    }

    // button that opens a new tab
    get newTabBtn(): Locator{
        return PageManager.page.getByRole('button', {name: 'New Tab'});
    }

    // button that opens a popup window
    get popupWindowBtn(): Locator{
        return PageManager.page.getByRole('button', {name: 'Popup Window'});
    }

    // visit count element inside the new tab page
    get vistCount(): Locator{
        return PageManager.page.locator('#Stats1_totalCount')
    }

    // link to GUI Elements section
    get GUIElemntLink(): Locator{
        return PageManager.page.getByRole('link', { name: 'GUI Elements' })
    }

    // heading shown after navigating to Selenium getting started
    get gettingStartSelenium(): Locator{
        return PageManager.page.getByRole('heading', {name: 'Getting Started'})
    }
    
}