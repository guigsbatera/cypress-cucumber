/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Pagamento {

    adicionarCartão({ nameCard, cardNumber, cvv, expirationMonth, expirationYear }) {
        cy.get(el.txtNameOnCard).should('exist').and('be.visible').type(nameCard)
        cy.get(el.txtCardNumber).should('exist').and('be.visible').type(cardNumber)
        cy.get(el.txtCvv).should('exist').and('be.visible').type(cvv)
        cy.get(el.txtExpirationMonth).should('exist').and('be.visible').type(expirationMonth)
        cy.get(el.txtExpirationYear).should('exist').and('be.visible').type(expirationYear)
        cy.get(el.btnPayAndConfirmOrder).should('exist').and('be.visible').click()
    }
}

export default new Pagamento();