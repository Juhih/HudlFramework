// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// This method is to launch the baseURL
Cypress.Commands.add("launchURL", () => {
  cy.visit(Cypress.config("BaseURL"));
});

// This method can be used for clicking on any login button, reset button or any button whose type is submit
Cypress.Commands.add("clickLogin", () => {
  cy.get("[type='submit']").click();
});

// This method will verify the state of a button whether it is enabled or disabled
Cypress.Commands.add("verifyButtonStatus", (buttonLocator, status) => {
  if (status === "enabled") {
    cy.get(buttonLocator).should("not.be.disabled");
  } else {
    cy.get(buttonLocator).should("be.disabled");
  }
});

// This method will compare message text
Cypress.Commands.add("verifyMessageText", (locator, message) => {
  cy.get(locator).contains(message);
});

//This method is used to verify message presset in popup

Cypress.Commands.add("verifyMessageInpopUp", (locator, message) => {
  cy.get(locator).then(($input) => {
    expect($input[0].validationMessage).to.contain(message);
  });
});
