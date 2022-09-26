
# HudlFramework

This framework has been created to validate the login functionality of Hudl website (https://www.hudl.com/login).
The pages which are automated to test the E2E login functinality are:

1.) Login page

2.) Reset password page (Need Help? page)

3.) Login with an organization page


## Installation

Steps to install the project:
Following requirements are needed prior cloing the git repository:

1.) Google Chrome Browser

2.) Node.js

3.) Visual Studio Code (VS Code)

After opening the cloned project in VS Code use below command:
```bash
  npm install
  npm install cypress --save-dev
```
    
You can also use this link for installation:
https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn 

## Secrets

Secrets are stored in "cypress.env.json" which is ignored in gitignore file

Please create file as "cypress.env.json" at project level and add the following values in it:

{
  "userName": "{your login ID}",
  
  "user_password": "{your password}"
}


## Reports

Screenshot and videos can be found in the following locations"

videos: "cypress/videos"

Screenshot : "/cypress/screenshots"

Note: These videos/ screenshots will only be present if the test cases are run in headless mode i.e. in run mode

## Tech Stack

This framework is based on:
Cypress.io 10.8 + Cucumber(BBD) + Page object model (POM)

Language used : JavaScript


## Running Tests

To run tests, run the following commands:

To run the test cases in headless mode:
```bash
npx cypress run
```
To run the test cases in open mode:
```bash
npx cypress open
```
To run the test cases based on tags:
```bash
Cypress_tags=TagName npx cypress run
```

Note: Test will automatically re-run on failure

## Bug in Hudl login

One iteration of test "Passing incorrect email format on reset password" will fail as it turned out to be a bug

## Improvements

1.) Instead of using the "cypress.env.json" , we can use the aws secrets

2.) Adding tags of @smoke/@regression and running those in github actions

3.) Adding API test cases to validate the response of Login functionality

4.) Creating company cypress.io dashboard to store result at a single location

