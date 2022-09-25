Feature: Login
    Background:
        Given I am at login Page

    @login
    #  In this scenario we have provided incorrect email and correct password to validate the login
    Scenario Outline: Invalid Email and correct password
        When I enter the invalid email <inValidEmail>
            And I enter correct password
        When I press Login button
        Then I get invalid email or password error
        Examples:
            | inValidEmail      |
            | juhi123@gmail.com |
    @login
    #  In this scenario we have provided correct email and incorrect password to validate the login
    Scenario Outline: Valid Email and Incorrect password
        When I enter the valid email <ValidEmail>
            And I enter incorrect password <incorrectPassword>
        When I press Login button
        Then I get invalid email or password error
        Examples:
            | ValidEmail            | incorrectPassword |
            | juhi.hazari@gmail.com | xxxxx             |
    @login
    # In this scenario we will directly click on login button without passing the userName and password
    Scenario Outline: Directly clicking on login button
        When I press Login button
        Then I get invalid email or password error

    @login
    # In this scenario we will not provide the password but will provide the correct UserName and click on login button
    Scenario Outline: Providing email and then clicking on login button
        When I enter the valid email <ValidEmail>
            And I press Login button
        Then I get invalid email or password error
        Examples:
            | ValidEmail            |
            | juhi.hazari@gmail.com |

    @login
    # In this scenario we will not provide the UserName but will provide the correct password and click on login button
    Scenario Outline: Providing password and then clicking on login button
        When I enter correct password
            And I press Login button
        Then I get invalid email or password error
    @login
    # In this scenario we will provide the correct UserName + password and then click on login button
    Scenario Outline: Succesful login
        When I enter the valid email <ValidEmail>
            And I enter correct password
        When I press Login button
        Then I am able to login
        Examples:
            | ValidEmail            |
            | juhi.hazari@gmail.com |
    @login
    # In this scenario we will provide the correct UserName + password with remember me as checked and then click on login button
    Scenario Outline: Succesful login with Remember me as checked
        When I enter the valid email <ValidEmail>
            And I enter correct password
            And I checked the remember me checkbox
        When I press Login button
        Then I am able to login
        Examples:
            | ValidEmail            |
            | juhi.hazari@gmail.com |



