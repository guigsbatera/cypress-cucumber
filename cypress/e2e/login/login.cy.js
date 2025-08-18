/// <reference types="cypress" />

//#region Classes
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../support/pages/login'
import Utilidades from '../../support/utilidades/index'
//#endregion

//#region Elementos
const el = require('../../support/pages/login/elements').ELEMENTS
//#endregion

describe('Login ao site Automation Exercise', () => {

    beforeEach(() => {
        Given('I am on the login page', () => {
            cy.visit(Utilidades.urlAutomationExerciseLogin)
        })
    });

    it.only('Deve efetuar login', () => {  
        Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
        //Asserção
    Then('I have a successful login', () => {
         cy.get(el.txtLoggedInAs).should('exist').and('be.visible').and('have.text', Utilidades.nomeUsuarioTeste)
    })
    });

    it('Não deve efetuar login com a senha incorreta', () => {
        Login.efetuarLogin(Utilidades.emailUsuarioTeste, 'aaa')
        //Asserção
        cy.get(el.txtLoginSenhaIncorreto).should('exist').and('be.visible').and('have.text', 'Your email or password is incorrect!')
    });

    it('Não deve efetuar login com email incorreto', () => {
        Login.efetuarLogin('email@email.com', Utilidades.senhaUsuarioTeste)
        //Asserção
        cy.get(el.txtLoginSenhaIncorreto).should('exist').and('be.visible').and('have.text', 'Your email or password is incorrect!')
    });
})