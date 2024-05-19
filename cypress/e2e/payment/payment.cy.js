/// <reference types="cypress" />

//#region Classes
import Login from '../../support/pages/login'
import Produtos from '../../support/pages/products'
import Carrinho from '../../support/pages/cart'
import Pagamento from '../../support/pages/payment'
import Utilidades from '../../support/utilidades/index'
//#endregion

//#region Elementos
const elCarrinho = require('../../support/pages/cart/elements').ELEMENTS
const elProdutos = require('../../support/pages/products/elements').ELEMENTS
const el = require('../../support/pages/payment/elements').ELEMENTS
//#endregion

describe('Efetuar compra e pagamento', () => {

    beforeEach(() => {
        cy.visit(Utilidades.urlAutomationExerciseLogin)
        Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
    });

    it('Deve efetuar a comprar de um produto', () => {
        Produtos.filtrarCategoria('MEN', 'TSHIRTS')
        cy.get(elProdutos.btnViewProduct).eq(0).should('exist').and('be.visible').click()
        Carrinho.adicionarAoCarrinho('5')
        cy.get(elCarrinho.btnViewCart).should('exist').and('be.visible').click()
        cy.get(elCarrinho.btnProceedToCheckout).should('exist').and('be.visible').click()
        cy.get(elCarrinho.txtDescription).should('exist').and('be.visible').and('have.text', 'Men > Tshirts')
        cy.get(elCarrinho.txtPrice).should('exist').and('be.visible').and('have.text', 'Rs. 400')
        cy.get(elCarrinho.btnQuantity).should('exist').and('be.visible').and('have.text', '5')
        cy.get(elCarrinho.txtTotal).should('exist').and('be.visible').and('have.text', 'Rs. 2000Rs. 2000')
        cy.get(elCarrinho.btnProceedToCheckout).should('exist').and('be.visible').click()
        Pagamento.adicionarCartão({
            nameCard: Utilidades.nomeUsuarioTeste,
            cardNumber: '5132097235081870',
            cvv: '123',
            expirationMonth: '10',
            expirationYear: '2025'
        })
        //Asserção
        cy.get(el.txtCongratulations).should('exist').and('be.visible').and('have.text', 'Congratulations! Your order has been confirmed!')
        cy.get(el.btnContinue).should('exist').and('be.visible').click()
        cy.get(elProdutos.txtProdutosRetornados).eq(0).should('exist').and('be.visible').and('have.text', 'Features Items')
    });
})