/// <reference types="cypress" />

//#region Classes
import Login from '../../../support/pages/login'
import Produtos from '../../../support/pages/products'
import Carrinho from '../../../support/pages/cart'
import Utilidades from '../../../support/utilidades/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
//#endregion

//#region Elementos
const el = require('../../../support/pages/cart/elements').ELEMENTS
const elProdutos = require('../../../support/pages/products/elements').ELEMENTS
//#endregion

Given('I am on the product page', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
  Produtos.filtrarCategoria('MEN', 'TSHIRTS')
  cy.get(elProdutos.btnViewProduct)
    .eq(0)
    .should('exist')
    .and('be.visible')
    .click()
  When('I add a product to the cart', () => {
    Carrinho.adicionarAoCarrinho('5')
    cy.get(el.btnViewCart).should('exist').and('be.visible').click()
  })
  //Asserção
  Then('The product information must be in the cart correctly', () => {
    cy.get(el.txtDescription)
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Men > Tshirts')
    cy.get(el.txtPrice)
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Rs. 400')
    cy.get(el.btnQuantity)
      .should('exist')
      .and('be.visible')
      .and('have.text', '5')
    cy.get(el.txtTotal)
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Rs. 2000')
    cy.get(el.btnXDelete).should('exist').and('be.visible').click()
  })
})
