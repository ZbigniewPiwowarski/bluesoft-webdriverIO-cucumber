// import { Given, When, Then } from "@wdio/cucumber-framework";
// import { expect, $ } from "@wdio/globals";

// import LoginPage from "../pageobjects/howWeWorkMenu.js";
// import SecurePage from "../pageobjects/menuOthers.js";

// interface Pages {
//   [key: string]: any;
// }

// const pages: Pages = {
//   login: LoginPage,
// };

// Given(/^I am on the (\w+) page$/, async (page) => {
//   await pages[page].open();
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//   await LoginPage.login(username, password);
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//   await expect(SecurePage.flashAlert).toBeExisting();
//   await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });
