/* -------------------------------------------------------------
* File: objectManager.ts
* Description: Centralized factory providing access to page helper instances.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

// import {Page} from '@playwright/test';
import { PageManager } from '../Managers/PageManagers';


import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {SignupPage} from '../pages/SignupPage';
import {mutipleFunPage} from '../pages/multiFunPage';
import { FramesPage } from '../pages/FramesPage';
import { APIs } from '../pages/APIs';

export class objectManager{

// Return a new HomePage helper tied to the current page
static get HomePage(): HomePage{
    return new HomePage(PageManager.page);
}

// Return a new LoginPage helper for login/signup interactions
static get LoginPage(): LoginPage{
     return new LoginPage(PageManager.page);
}

// Return a new SignupPage helper for user registration
static get SignupPage(): SignupPage{
     return new SignupPage(PageManager.page);
}

// Return a new mutipleFunPage helper for miscellaneous UI tests
static get mutipleFunPage(): mutipleFunPage{
     return new mutipleFunPage(PageManager.page);
}

// Return a new FramesPage helper for frame-related interactions
static get FramePage(): FramesPage{
     return new FramesPage(PageManager.page)
} 

// Return a helper for API request methods (doesn't require a page)
static get APIs(): APIs{
     return new APIs()
} 


}


