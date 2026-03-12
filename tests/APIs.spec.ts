/** -------------------------------------------------------------
* File: APIs.spec.ts
* Description: Playwright API tests
* Author: Akash Nallabelli
* Notes: Uses objectManager to decouple API request logic.
-------------------------------------------------------------
*/

import { test } from '@playwright/test'
import { objectManager } from '../Managers/objectManager'

// This spec file contains API-related tests using Playwright's request fixture.
// We rely on an objectManager to centralize API calls and other utilities.

// Test case to retrieve all products from the API endpoint.
test('Get all Products', {tag: '@getAllProductsAPI'}, async ({request})=>{
    await objectManager.APIs.getAllProductsAPI(request)
})

// Test case to create a new user via the API.
test('create new user', {tag: '@createUserAPI'}, async ({request})=>{
    await objectManager.APIs.createUser(request)
})