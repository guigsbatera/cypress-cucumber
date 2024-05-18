/// <reference types="cypress" />

//#region Classes
import Login from '../../support/pages/login'
import Produtos from '../../support/pages/products'
import Carrinho from '../../support/pages/cart'
import Utilidades from '../../support/utilidades/indes'
//#endregion

//#region Elementos
const el = require('../../support/pages/cart/elements').ELEMENTS
const elProdutos = require('../../support/pages/products/elements').ELEMENTS
//#endregion

describe('Carrinho de compras', () => {

    beforeEach(() => {
        cy.visit(Utilidades.urlAutomationExerciseLogin)
        Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
    });

    it('Deve adicionar um produto ao carrinho, validar os campos item, description, price, quantity, total e remove-lo', () => {
        Produtos.filtrarCategoria('MEN', 'TSHIRTS')
        cy.get(elProdutos.btnViewProduct).eq(0).should('exist').and('be.visible').click()
        Carrinho.adicionarAoCarrinho('5')
        cy.get(el.btnViewCart).should('exist').and('be.visible').click()
        //Asserção
        cy.get(el.txtDescription).should('exist').and('be.visible').and('have.text', 'Men > Tshirts')
        cy.get(el.txtPrice).should('exist').and('be.visible').and('have.text', 'Rs. 400')
        cy.get(el.btnQuantity).should('exist').and('be.visible').and('have.text', '5')
        cy.get(el.txtTotal).should('exist').and('be.visible').and('have.text', 'Rs. 2000')
        cy.get(el.btnXDelete).should('exist').and('be.visible').click()
    });
})