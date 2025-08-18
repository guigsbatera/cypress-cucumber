/// <reference types="cypress" />

//#region Classes
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../../support/pages/login'
import Utilidades from '../../../support/utilidades/index'
//#endregion

//#region Elementos
const el = require('../../../support/pages/login/elements').ELEMENTS
//#endregion


Given('I am on the login page', () => {
    cy.visit(Utilidades.urlAutomationExerciseLogin)
})
When('I set a registered my email and password', () => {
    Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
})
//Asserção
Then('I have a successful login', () => {
    cy.get(el.txtLoggedInAs).should('exist').and('be.visible').and('have.text', Utilidades.nomeUsuarioTeste)
})