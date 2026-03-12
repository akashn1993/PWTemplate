/** -------------------------------------------------------------
* File: framesTest.spec.ts
* Description: UI test targeting frame interactions, following the
*              structure seen in APIs.spec.ts for consistency.
* Author: Akash Nallabelli
* Notes: Uses PageManager and objectManager helpers to abstract
*       Playwright page and page actions, similar to API helpers.
-------------------------------------------------------------
*/

import { test } from '@playwright/test'
import { objectManager } from '../Managers/objectManager'
import { PageManager } from '../Managers/PageManagers'

// beforeEach hook to ensure PageManager holds the current page instance
test.beforeEach('assign page', ({page}) =>{
    PageManager.setPage(page)
})

// main test case: launch URL, perform frame actions, and switch frames
test('frames test', {tag: '@FramesTest'}, async ()=>{
    await objectManager.FramePage.launchURL();
    await objectManager.FramePage.framesFuc()
    await objectManager.FramePage.frameSwitch()
})