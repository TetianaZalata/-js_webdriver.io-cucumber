import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';



const pages = {
    home: HomePage
}

Given(/^I am on the webdriverio page$/, async () => {
    await pages.home.open()
});

When(/^I click on search$/, async () => {
    await HomePage.searchOpen()
});

Then(/^I type text (\w+) on search$/, async (text) => {
    await HomePage.typeText(text);
    await expect(HomePage.inputSearchField).toBeExisting();
    await expect(HomePage.inputSearchField).toHaveValue(text);
})

