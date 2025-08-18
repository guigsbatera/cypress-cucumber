Feature: Cart

Scenario: Valid Cart
Given I am on the product page
When I add a product to the cart
Then the product information must be in the cart correctly
