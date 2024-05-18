/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Carrinho {

    adicionarAoCarrinho(quantidade) {
        cy.get(el.txtQuantity).should('exist').and('be.visible').clear().type(quantidade)
        cy.get(el.btnAddToCart).should('exist').and('be.visible').click()
    }
}

export default new Carrinho();