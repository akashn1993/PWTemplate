/** -------------------------------------------------------------
* File: MultiFunction.spec.ts
* Description: UI tests covering alerts, tabs, and popup windows.
*              Styled to match the header/comment convention used in
*              other spec files such as APIs.spec.ts.
* Author: Akash Nallabelli
* Notes: Tests utilize mutipleFunPage helper for navigation and
*        interactions, with PageManager providing the page context.
-------------------------------------------------------------
*/

import { test } from '@playwright/test'
import { PageManager } from '../Managers/PageManagers'
import { objectManager } from '../Managers/objectManager'

// ensure PageManager receives a fresh page instance before each test

test.beforeEach('before each ', async ({page}) =>{
    PageManager.setPage(page);
})

// alert-related interactions

// Test that exercises a variety of alert dialogs.
test('Alerts @simplaeAlert', async () =>{
    await objectManager.mutipleFunPage.luanchURL();
    await objectManager.mutipleFunPage.handleSimpleAlert();
    await objectManager.mutipleFunPage.acceptConfirmAlert();
    await objectManager.mutipleFunPage.dismissConfirmAlert();
    await objectManager.mutipleFunPage.acceptPrompAlert();
    await objectManager.mutipleFunPage.cancelPrompAlert();
})

// tab handling scenario

// Test opening a new browser tab and interacting within it.
    test('Tabs', {tag: '@Tabs'}, async ()=>{
     await objectManager.mutipleFunPage.luanchURL();
     await objectManager.mutipleFunPage.multiTab()
})

// popup window validation

// Verify switching to a popup window by page title.
test('Popup window', {tag: '@popupWindow'}, async ()=>{
    await objectManager.mutipleFunPage.luanchURL();
    await objectManager.mutipleFunPage.switchPageTitle('Selenium'); 
})