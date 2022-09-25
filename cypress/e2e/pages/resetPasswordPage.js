import resetLocators from "../locators/resetLocators";
import loginData from "../data/loginData";
class resetPasswordPage {
  static clickOnBackButton() {
    cy.contains(resetLocators.BackButton).click();
  }

  static verifyURL() {
    cy.url().should("eq", Cypress.config("BaseURL"));
  }

  static enterEmailOnresetPassword(email) {
    cy.get(resetLocators.EmailField).type(email);
  }

  static verifyInvalidEmailMessage() {
    cy.get(resetLocators.ResetErrorMessage)
      .invoke("text")
      .then(($text) => {
        cy.wrap($text).should("equal", loginData.InvalidEmailReset);
      });
  }

  static invalidFormatMessage() {
    cy.get(resetLocators.ResetErrorMessage).contains(
      loginData.InvalidEmailFormatReset
    );
  }
}
export default resetPasswordPage;
