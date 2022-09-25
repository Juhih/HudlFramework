import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";
import loginData from "../data/loginData";

Given(/^I am at login Page$/, () => {
  cy.launchURL();
});

When(/^I enter correct password$/, () => {
  loginPage.enterPassword(Cypress.env("user_password"));
});

When(/^I enter the invalid email (.*?)$/, (inValidEmail) => {
  loginPage.enterUserName(inValidEmail);
});

Then(/^I enter the valid email$/, () => {
  loginPage.enterUserName(Cypress.env("userName"));
});

Then(/^I press Login button$/, () => {
  cy.clickLogin();
});

Then(/^I get invalid email or password error$/, () => {
  loginPage.verifyErrorMessage(
    "We didn't recognize that email and/or password."
  );
});

Then(/^I am able to login$/, () => {
  loginPage.verifyLoginSuccessful();
});

Then(/^I checked the remember me checkbox$/, () => {
  loginPage.checkRememberMeCheckbox();
});

Then(/^I click on Need Help link$/, () => {
  loginPage.clickNeedHelpLink();
});

Then(/^I click on Organizational login button$/, () => {
  loginPage.clickOnOrganizationalLogin();
});

Then(/^I enter incorrect password (.*?)$/, (incorrectPassword) => {
  loginPage.enterPassword(incorrectPassword);
});

// beforeEach(() => {
// });
