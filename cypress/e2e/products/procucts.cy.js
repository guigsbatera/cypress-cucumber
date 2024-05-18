/// <reference types="cypress" />

//#region Classes
import Login from '../../support/pages/login'
import Produtos from '../../support/pages/products'
import Utilidades from '../../support/utilidades/indes'
//#endregion

//#region Elementos
const el = require('../../support/pages/products/elements').ELEMENTS
//#endregion

describe('Filtrar produtos pela categoria', () => {

    beforeEach(() => {
        cy.visit(Utilidades.urlAutomationExerciseLogin)
        Login.efetuarLogin(Utilidades.emailUsuarioTeste, Utilidades.senhaUsuarioTeste)
    });

    it('Deve utilizar o filtro SAREE - WOMEN', () => {
        Produtos.filtrarCategoria('WOMEN', 'SAREE')
        //Asserção
        cy.get(el.btnViewProduct).should('exist').and('be.visible').and('have.length', 3)
    });
    it('Deve utilizar o filtro JEANS - MEN', () => {
        Produtos.filtrarCategoria('MEN', 'JEANS')
        //Asserção
        cy.get(el.btnViewProduct).should('exist').and('be.visible').and('have.length', 3)
    });
    it('Deve utilizar o filtro DRESS - KIDS', () => {
        Produtos.filtrarCategoria('KIDS', 'DRESS')
        //Asserção
        cy.get(el.btnViewProduct).should('exist').and('be.visible').and('have.length', 6)
    });
})