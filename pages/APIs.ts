/* -------------------------------------------------------------
* File: APIs.ts
* Description: Wrapper class providing helper methods for API interactions used in API spec tests.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { APIRequestContext, expect } from '@playwright/test'
import { testdata } from '../Managers/testdataManager'


export class APIs{
    private JsonTestData = testdata.getJSONTestdata;

    /**
     * Send GET request to retrieve all products and perform basic assertions.
     */
    async getAllProductsAPI(request: APIRequestContext){
        const getProductsResponse = await request.get(this.JsonTestData.GetAllProductsAPI)
        console.log(await getProductsResponse.json())
        expect(getProductsResponse.ok()).toBeTruthy();
        expect(getProductsResponse.status()).toBe(200)
        const response = await getProductsResponse.json()
        expect(await response.products.length).toBeGreaterThan(2)
    }

    /**
     * Create a new user using POST and assert the expected response code.
     */
    async createUser(request: APIRequestContext){
        const requestjson = {...this.JsonTestData.newUserAPI}
        requestjson.email = ` test@testCompany${Date.now()}.com`,
        console.log('request:: ', requestjson)
        console.log('request email:: ', requestjson.email)
        const createUserResponse = await request.post(this.JsonTestData.CreateNewUserAPI, {
            form: requestjson,
        })
        console.log(await createUserResponse.json())
        expect(createUserResponse.ok()).toBeTruthy();
        expect(createUserResponse.status()).toBe(200)
        const response = await createUserResponse.json()
        expect(response.responseCode).toBe(201)

    }
}