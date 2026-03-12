/* -------------------------------------------------------------
* File: FramesPageLocators.ts
* Description: Selector values for frames page elements used by helper methods.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { FrameLocator, Locator } from "@playwright/test";
import { PageManager } from "../Managers/PageManagers";

export class FramesPageLocators{


    /**
     * CSS selector for the first frame element.
     */
    get frame1_Id(){
        return '#frm1';  
    } 

    /**
     * CSS selector for the second frame element.
     */
    get frame2_Id(){
        return '#frm2';
    } 

    /**
     * CSS selector for the third frame element.
     */
    get frame3_Id(){
        return '#frm3';
    } 

    /**
     * Selector for the first name input inside a frame.
     */
    get firstName_ID(){
        return '#firstName';
    }

    /**
     * Selector for a text box element, used outside frames.
     */
    get textBox_Id(){
        return '#name';
    }
} 