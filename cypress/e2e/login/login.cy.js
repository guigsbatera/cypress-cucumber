/// <reference types="cypress" />

//#region Classes
import Login from '../../support/pages/login'
import Utilidades from '../../support/utilidades/indes'
//#endregion

//#region Elementos
const el = require('../../support/pages/login/elements').ELEMENTS
//#endregion

describe('Login ao site Automation Exercise', () => {

    beforeEach(() => {
        cy.visit(Utilidades.urlAutomationExerciseLogin)
    });

    it('Deve efetuar login', () => {
        Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
        //Asserção
        cy.get(el.txtLoggedInAs).should('exist').and('be.visible').and('have.text', Utilidades.nomeUsuarioTeste)
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