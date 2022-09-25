import resetLocators from "../locators/resetLocators";
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
}
export default resetPasswordPage;
