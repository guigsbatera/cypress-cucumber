Feature: Product Purchase and Payment

Scenario: Successfully make a purchase and complete payment
Given the user is logged into the system
And they navigate to the "T-Shirts" category for men
When they add a product to the cart with a quantity of 5
And view the cart
And proceed to checkout
And verify the purchase details
And proceed to payment
And fill in the credit card information:
Then the system should display the confirmation message "Congratulations! Your order has been confirmed!"
