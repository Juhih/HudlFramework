
# HudlFramework

This framework has been created to validate the login functionality of a Hudl website.
The pages which are automated to test the E2E login functinality are:

1.) Login pages

2.) Reset password page (Need Help)

3.) Login with organization


## Installation

Steps to install the project:
Below things are required prior cloing the git repo:

1.) Google Chrome Browser

2.) Node.js

3.) Visual studio Code

After opening the cloned project in vscode use below commonds
```bash
  npm install
  npm install cypress --save-dev
```
    
You can also use this link for Installation:
https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn 

## Secrets

Secrets are stored in "cypress.env.json" which is ignored in gitignore file

Please create file as "cypress.env.json" at project level and add the following values in it:

{
  "userName": "{your login ID}",
  
  "user_password": "{your password}"
}


## Reports

Screenshot and videos can be found at the following location"

videos: "cypress/videos"

Screenshot : "/cypress/screenshots"

Note: These videos/ screenshot will only be present, if the test cases are run in headless mode i.e in run mode
## Tech Stack

This framework is based on:
Cypress.io 10.8 + Cucumber(BBD) + Page object model (POM)

Language used : JavaScript


## Running Tests

To run tests, run the following command

To run the test cases in headless mode
```bash
npx cypress run
```
To run the test cases in open mode
```bash
npx cypress open
```
To run the test cases based on tags
```bash
Cypress_tags=TagName npx cypress run
```

Note: Test will re-run on failure
## Failure

One iteration of test "Passing incorrect eamil format on reset password" will fail as it turned out to be a bug

