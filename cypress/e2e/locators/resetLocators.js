const resetLocators = Object.freeze({
  EmailField: "[data-qa-id='password-reset-input']",
  Resetbutton: "[data-qa-id='password-reset-submit-btn']",
  ResetErrorMessage: "[data-qa-id='password-reset-error-display']",
  ConfirmationMessage:
    "//div[contains(@class, 'checkEmailContainer')]//p[contains(text(),'Click the link in the email to reset your password.')]",
  BackButton: "Back",
});

export default resetLocators;
