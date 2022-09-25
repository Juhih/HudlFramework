import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import organizationalLoginLocators from "../locators/organizationalLoginLocators";
import loginPage from "../pages/loginPage";

Given(/^The Login button is '(.*?)'$/, (status) => {
  cy.verifyButtonStatus(
    organizationalLoginLocators.OrganizationlLoginButton,
    status
  );
});

Given(/^I click on Login with userName and password button$/, () => {
  cy.get(organizationalLoginLocators.LoginWithEmailPassword).click();
});

Then(/^I get invalid email error message$/, () => {
  loginPage.verifyErrorMessage(
    "This account can't log in with an organization yet. Please log in using your email and password."
  );
});

Then(/^I get invalid email format error$/, () => {
  cy.get("#uniId_1").then(($input) => {
    expect($input[0].validationMessage).to.eq(
      "Please enter a part followed by '@'. '@gmail.com' is incomplete."
    );
  });
});
