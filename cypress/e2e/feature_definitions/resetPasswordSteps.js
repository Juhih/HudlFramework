import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import resetLocators from "../locators/resetLocators";
import resetPasswordPage from "../pages/resetPasswordPage";

Given(/^The send reset link button is '(.*?)'$/, (status) => {
  cy.verifyButtonStatus(resetLocators.Resetbutton, status);
});

When(/^I press reset button$/, () => {
  cy.clickLogin();
});

When(/^I get invalid format message$/, () => {
  resetPasswordPage.invalidFormatMessage();
});

When(/^I get invalid message$/, () => {
  resetPasswordPage.verifyInvalidEmailMessage();
});

When(/^I get sucsess message$/, () => {
  cy.xpath(resetLocators.ConfirmationMessage);
});

When(/^I click on Back button$/, () => {
  resetPasswordPage.clickOnBackButton();
});

When(/^I am landed on right URL$/, () => {
  resetPasswordPage.verifyURL();
});

When(/^I enter the email on reset Page (.*?)$/, (inValidEmail) => {
  cy.get(resetLocators.EmailField).type(inValidEmail);
});

When(/^I enter the valid email on reset Page$/, () => {
  cy.get(resetLocators.EmailField).type(Cypress.env("userName"));
});
