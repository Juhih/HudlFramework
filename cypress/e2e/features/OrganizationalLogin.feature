Feature: Organizational Login
    Background:
        Given I am at login Page

    # In this scenario we will test 2 things
    # 1.)Login button disabled until email provided
    # 2.) Validating the error message on providing invalid email
    Scenario Outline: Passing incorrect eamil on Organizational Login
        When I click on Organizational login button
        Then The Login button is 'disabled'
            And I enter the invalid email <inValidEmail>
        Then The Login button is 'enabled'
        When I press Login button
        Then I get invalid email error message
        Examples:
            | inValidEmail      |
            | juhi123@gmail.com |

    # This scenario will validate the different email format
    Scenario Outline: Validating Email format
        When I click on Organizational login button
            And I enter the invalid email <inValidEmail>
            And I press Login button
        Then I get invalid email format error
        Examples:
            | inValidEmail      |
            | @gmail.com        |
            | juhi.hazari.com   |
            | juhi.hazari@.net  |
            | juhi.hazari@gmail |


    #Sucsess email on providing the correct Email ( However we cannot test this because I don't have correct organizational email address)


    #Navigating on organizational login Page and clicking on Login with email address to validate that user lands on page
    Scenario Outline: Clicking on Login with userName and password button
        When I click on Organizational login button
            And I click on Login with userName and password button
        Then I am landed on right URL