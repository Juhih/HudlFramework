Feature: Resetting password to login
    Background:
        Given I am at login Page

    # In this scenario we will test 2 things
    # 1.)Reset button is only enabled when some value is provided in the field
    # 2.) Validating the error message on providing invalid email format
    @Reset
    Scenario Outline: Passing incorrect eamil format on reset password
        When I click on Need Help link
        Then The send reset link button is 'disabled'
        When I enter the email on reset Page <inValidEmail>
        Then The send reset link button is 'enabled'
        When I press reset button
        Then I get invalid format message
        Examples:
            | inValidEmail      |
            | juhi.hazari@gmail |
            | juhi.hazari.com   |
            | juhi.hazari@.net  |
            | @gmail.com        |

    # In this scenario we will test 2 things
    # 1.)Reset button is only enabled when some value is provided in the field
    # 2.) Validating the error message on providing invalid email
    @Reset
    Scenario Outline: Passing incorrect eamil on reset password
        When I click on Need Help link
        Then The send reset link button is 'disabled'
        When I enter the email on reset Page <inValidEmail>
        Then The send reset link button is 'enabled'
        When I press reset button
        Then I get invalid message
        Examples:
            | inValidEmail      |
            | juhi123@gmail.com |


    # Sucsess email on providing the correct Email address and the validation of the sucsess message
    @Reset
    Scenario: Passing correct eamil on reset password
        When I click on Need Help link
            And I enter the valid email on reset Page
        When I press reset button
        Then I get sucsess message

    # Going on Need help page and clicking on the back button to validate it lands unser on right URl
    @Reset
    Scenario: Clicking back button on Reset page
        When I click on Need Help link
            And I click on Back button
        Then I am landed on right URL
