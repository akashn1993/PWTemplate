/* -------------------------------------------------------------
* File: HomePage.ts
* Description: Helper class encapsulating interactions with the home page.
* Author: Akash Nallabelli
* -------------------------------------------------------------
*/

import { Page, expect } from '@playwright/test';
import { PageManager } from '../Managers/PageManagers.ts';
import { testdata } from '../Managers/testdataManager.ts';
import { HomePageLocators } from '../locators/HomePageLocators.ts';


export class HomePage {
  HPLocator: HomePageLocators;
  private JsonTestData = testdata.getJSONTestdata

  /**
   * Initialize page helper with the current Playwright page instance.
   */
  constructor(private page: Page) {
    PageManager.setPage(page);
    this.HPLocator = new HomePageLocators();
  }

  /**
   * Navigate the browser to the configured base URL.
   */
  async launchURL() {
    await PageManager.page.goto(this.JsonTestData.URL);
  }

  /**
   * Assert that the home page's featured section is visible.
   */
  async validateHome() {
    await expect(this.HPLocator.home_FeaturedSection).toBeVisible();
  }

  /**
   * Click the signup/login button on the home page.
   */
  async clickSignup() {
    await this.HPLocator.signupBtn.click();
  }

  /**
   * Verify that the "Logged in as" text contains the specified name.
   */
  async validateLoginAs(name: String) {
    await expect(this.HPLocator.loginAs).toHaveText("Logged in as " + name)
  }

  /**
   * Delete the current user account and confirm the deletion flow.
   */
  async clickDelete() {
    await this.HPLocator.deleteBtn.click();
    await expect(this.HPLocator.accountDeletedText).toBeVisible();
    await this.HPLocator.continueBtn.click();
  }

  /**
   * Switch to the popup page after clicking the delete confirmation
   * and update PageManager to reference the new page.
   */
  async pageSwitchandDelete(){
    const [page2] = await Promise.all([
    this.page.waitForEvent('popup'), this.HPLocator.accountDeletedText.click()]);
    PageManager.setPage(page2);
  }

}