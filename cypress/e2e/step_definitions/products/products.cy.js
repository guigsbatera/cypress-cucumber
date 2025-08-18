/// <reference types="cypress" />

//#region Classes
import Login from '../../../support/pages/login'
import Produtos from '../../../support/pages/products'
import Utilidades from '../../../support/utilidades/index'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
//#endregion

//#region Elementos
const el = require('../../../support/pages/products/elements').ELEMENTS
//#endregion

// Teste 1
Given('The user is logged into the system', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
})
When(
  'The user filters products by category WOMEN and subcategory SAREE',
  () => {
    Produtos.filtrarCategoria('WOMEN', 'SAREE')
  }
)
//Asserção
Then('The system should display a list of 3 products', () => {
  cy.get(el.btnViewProduct)
    .should('exist')
    .and('be.visible')
    .and('have.length', 3)
})

// Teste 2
Given('The user is logged into the system', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
})
When('The user filters products by category MEN and subcategory JEANS', () => {
  Produtos.filtrarCategoria('MEN', 'JEANS')
})
//Asserção
Then('', () => {
  cy.get(el.btnViewProduct)
    .should('exist')
    .and('be.visible')
    .and('have.length', 3)
})

// Teste 3
Given('The user is logged into the system', () => {
  cy.visit(Utilidades.urlAutomationExerciseLogin)
  Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
})
When('The user filters products by category KIDS and subcategory DRESS', () => {
  Produtos.filtrarCategoria('KIDS', 'DRESS')
})
//Asserção
Then('The system should display a list of 6 products', () => {
  cy.get(el.btnViewProduct)
    .should('exist')
    .and('be.visible')
    .and('have.length', 6)
})
