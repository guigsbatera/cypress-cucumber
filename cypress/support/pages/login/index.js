/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Login {

    efetuarLogin(email, password) {
        cy.get(el.txtEmailAddrees).should('exist').and('be.visible').type(email)
        cy.get(el.txtPassword).should('exist').and('be.visible').type(password)
        cy.get(el.btnLogin).should('exist').and('be.visible').click()
    }
}

export default new Login();