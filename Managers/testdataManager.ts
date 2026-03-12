/* -------------------------------------------------------------
* File: testdataManager.ts
* Description: Loads JSON test data for the current environment.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import * as fs from 'fs';

export class testdataManager{
    private env = process.env.TEST_ENV;
    
    /**
     * Read and parse the JSON file corresponding to the current TEST_ENV.
     * Returns the parsed object.
     */
    get getJSONTestdata(){
        const path =  `./testdata/${this.env}_testdata.json`.trim();
        const testdata = JSON.parse(fs.readFileSync(path, 'utf-8'))
        return testdata;

    }
}

export const testdata = new testdataManager();