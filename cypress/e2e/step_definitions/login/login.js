/// <reference types="cypress" />

//#region Classes
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Login from '../../../support/pages/login'
import Utilidades from '../../../support/utilidades/index'
//#endregion

//#region Elementos
const el = require('../../../support/pages/login/elements').ELEMENTS
//#endregion

//Teste 1
Given('I am on the login page', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
})
When('I set a registered my email and password', () => {
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
})
//Asserção
Then('I have a successful login', () => {
  cy.get(el.txtLoggedInAs)
    .should('exist')
    .and('be.visible')
    .and('have.text', Utilidades.nomeUsuarioTeste)
})

//Teste 2
Given('I am on the login page', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
})
When('I set an incorrect password', () => {
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, 'aaa')
})
//Asserção
Then('I get an error message', () => {
  cy.get(el.txtLoginSenhaIncorreto)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Your email or password is incorrect!')
})

//Teste 3
Given('I am on the login page', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
})
When('I set an incorrect email', () => {
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, 'aaa')
})
//Asserção
Then('I get an error message', () => {
  cy.get(el.txtLoginSenhaIncorreto)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Your email or password is incorrect!')
})
