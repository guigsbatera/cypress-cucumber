/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

//Teste 1
Given('I make a GET request to the Trello API endpoint', () => {
  cy.request(
    'GET',
    'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
  ).as('usuario')
})
Then('The response status code should be 200', () => {
  cy.get('@usuario').its('status').should('equal', 200)
})

//Teste 2
Given('I have a successful response from the Trello API', () => {
  cy.request(
    'GET',
    'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
  ).as('usuario')
})
Then(
  'The list property within the data should have a name of Professional',
  () => {
    cy.get('@usuario')
      .its('body')
      .then((response) => {
        expect(response.data.list).has.property('name', 'Professional')
      })
  }
)
