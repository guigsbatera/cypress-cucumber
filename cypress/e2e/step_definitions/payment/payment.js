/// <reference types="cypress" />

//#region Classes
import Login from '../../../support/pages/login'
import Produtos from '../../../support/pages/products'
import Carrinho from '../../../support/pages/cart'
import Pagamento from '../../../support/pages/payment'
import Utilidades from '../../../support/utilidades/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
//#endregion

//#region Elementos
const elCarrinho = require('../../../support/pages/cart/elements').ELEMENTS
const elProdutos = require('../../../support/pages/products/elements').ELEMENTS
const el = require('../../../support/pages/payment/elements').ELEMENTS
//#endregion

Given('The user is logged into the system', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
})

Given('And they navigate to the "T-Shirts" category for men', () => {
  Produtos.filtrarCategoria('MEN', 'TSHIRTS')
})
When('They add a product to the cart with a quantity of 5', () => {
  cy.get(elProdutos.btnViewProduct)
    .eq(0)
    .should('exist')
    .and('be.visible')
    .click()
  Carrinho.adicionarAoCarrinho('5')
})
When('View the cart', () => {
  cy.get(elCarrinho.btnViewCart).should('exist').and('be.visible').click()
})
When('Proceed to checkout', () => {
  cy.get(elCarrinho.btnProceedToCheckout)
    .should('exist')
    .and('be.visible')
    .click()
})
When('Verify the purchase details', () => {
  cy.get(elCarrinho.txtDescription)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Men > Tshirts')
  cy.get(elCarrinho.txtPrice)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Rs. 400')
  cy.get(elCarrinho.btnQuantity)
    .should('exist')
    .and('be.visible')
    .and('have.text', '5')
  cy.get(elCarrinho.txtTotal)
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Rs. 2000Rs. 2000')
})
When('Proceed to payment', () => {
  cy.get(elCarrinho.btnProceedToCheckout)
    .should('exist')
    .and('be.visible')
    .click()
})
When('Fill in the credit card information', () => {})
Pagamento.adicionarCartão({
  nameCard: Utilidades.nomeUsuarioTeste,
  cardNumber: '5132097235081870',
  cvv: '123',
  expirationMonth: '10',
  expirationYear: '2025',
})
//Asserção
Then(
  'The system should display the confirmation message "Congratulations! Your order has been confirmed!"',
  () => {
    cy.get(el.txtCongratulations)
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Congratulations! Your order has been confirmed!')
    cy.get(el.btnContinue).should('exist').and('be.visible').click()
    cy.get(elProdutos.txtProdutosRetornados)
      .eq(0)
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Features Items')
  }
)
