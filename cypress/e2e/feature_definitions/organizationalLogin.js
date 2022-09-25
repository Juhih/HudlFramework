import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import organizationalLoginLocators from "../locators/organizationalLoginLocators";
import loginPage from "../pages/loginPage";
import loginData from "../data/loginData";

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
  loginPage.verifyErrorMessage(loginData.InvalidEmailOrganizationLogin);
});

Then(/^I get invalid email format error (.*?)$/, (ErrorMessage) => {
  cy.get("#uniId_1").then(($input) => {
    expect($input[0].validationMessage).to.contain(ErrorMessage);
  });
});
