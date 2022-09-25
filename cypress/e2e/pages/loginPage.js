import loginLocators from "../locators/loginLocators";

class loginPage {
  static enterUserName(userName) {
    cy.get(loginLocators.EmailAddress).type(userName);
  }

  static enterPassword(password) {
    cy.get(loginLocators.Password).type(password, { log: false });
  }

  static verifyErrorMessage(message) {
    cy.get(loginLocators.LogInErrorMessage).contains(message);
  }

  static verifyLoginSuccessful() {
    cy.get(loginLocators.UserNameIcon).contains("Juhi H");
  }

  static checkRememberMeCheckbox() {
    cy.get(loginLocators.RememberMeCheckbox).check({ force: true });
  }

  static clickNeedHelpLink() {
    cy.get(loginLocators.NeedHelpLink).click();
  }

  static clickOnOrganizationalLogin() {
    cy.get(loginLocators.OrganisationlLoginButton).click();
  }
}
export default loginPage;
