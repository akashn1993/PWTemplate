/* -------------------------------------------------------------
* File: PageManagers.ts
* Description: Holds a static reference to the current Playwright page object.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import {Page} from '@playwright/test';

export class PageManager{

    private static staticPage : Page;

   /**
    * Store the given Playwright page in a static field for global access.
    */
   static setPage(page: Page){
    this.staticPage=page;
   }

   /**
    * Retrieve the current Playwright page instance.
    */
   static get page(): Page{
    return this.staticPage;
   }

}