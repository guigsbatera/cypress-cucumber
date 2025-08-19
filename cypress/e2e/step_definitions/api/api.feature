Feature: API Validation

Scenario: Validate status code
Given I make a GET request to the Trello API endpoint
When the request is successful
Then the response status code should be 200

Scenario: Validate name in structure list
Given I have a successful response from the Trello API
When I inspect the response body
Then the list property within the 'data' should have a name of Professional
