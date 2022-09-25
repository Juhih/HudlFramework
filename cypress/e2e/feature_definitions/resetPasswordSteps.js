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
  cy.get(resetLocators.ResetErrorMessage).contains(
    "That isn't a valid email address. Make sure to use the email@domain.com format."
  );
});

When(/^I get invalid message$/, () => {
  cy.get(resetLocators.ResetErrorMessage)
    .invoke("text")
    .then(($text) => {
      cy.wrap($text).should(
        "equal",
        "That email address doesn't exist in Hudl. Check with your coach to ensure they have the right email address for you."
      );
    });
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
