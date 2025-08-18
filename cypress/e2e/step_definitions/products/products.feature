Feature: Product Filtering by Category

Scenario: Filter products by 'SAREE - WOMEN'
Given the user is logged into the system
When the user filters products by category 'WOMEN' and subcategory 'SAREE'
Then the system should display a list of 3 products

Scenario: Filter products by 'JEANS - MEN'
Given the user is logged into the system
When the user filters products by category 'MEN' and subcategory 'JEANS'
Then the system should display a list of 3 products

Scenario: Filter products by 'DRESS - KIDS'
Given the user is logged into the system
When the user filters products by category 'KIDS' and subcategory 'DRESS'
Then the system should display a list of 6 products
