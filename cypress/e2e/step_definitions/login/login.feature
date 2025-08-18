Feature: Login

Scenario: Valid Login
Given I am on the login page
When I set a registered my email and password
Then I have a successful login

Scenario: Invalid login with incorrect password
Given I am on the login page
When I set an incorrect password
Then I get an error message

Scenario: Invalid login with incorrect email
Given I am on the login page
When I set an incorrect email
Then I get an error message
