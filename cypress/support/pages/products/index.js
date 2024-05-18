/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Produtos {

    filtrarCategoria(genero, categoria) {
        cy.get(el.txtCategory).should('exist').and('be.visible').and('have.text', 'Category')
        if (genero === 'WOMEN' && categoria === 'DRESS' || 'TOPS' || 'SAREE') {
            cy.get(el.btnWomen).should('exist').and('be.visible').click()
            switch (categoria) {
                case 'DRESS':
                    cy.get(el.btnFiltroWomenDress).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Women - Dress Products')
                    break;

                case 'TOPS':
                    cy.get(el.btnFiltroWomenTops).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Women - Tops Products')
                    break;

                case 'SAREE':
                    cy.get(el.btnFiltroWomenSaree).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Women - Saree Products')
                    break;

                default:
                    break;
            }
        }
        if (genero === 'MEN' && categoria === 'TSHIRTS' || 'JEANS') {
            cy.get(el.btnMen).should('exist').and('be.visible').click()
            switch (categoria) {
                case 'TSHIRTS':
                    cy.get(el.btnFiltroMenTshirts).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Men - Tshirts Products')
                    break;

                case 'JEANS':
                    cy.get(el.btnFiltroMenJeans).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Men - Jeans Products')
                    break;

                default:
                    break;
            }
        }
        if (genero === 'KIDS' && categoria === 'DRESS' || 'TOPS & SHIRTS' ) {
            cy.get(el.btnKids).should('exist').and('be.visible').click()
            switch (categoria) {
                case 'DRESS':
                    cy.get(el.btnFiltroKidsDress).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Kids - Dress Products')
                    break;

                case 'TOPS & SHIRTS':
                    cy.get(el.btnFiltroKidsTopsShirts).should('exist').and('be.visible').click()
                    cy.get(el.txtProdutosRetornados).should('exist').and('be.visible').and('have.text', 'Kids - Tops & Shirts Products')
                    break;

                default:
                    break;
            }
        }
    }
}

export default new Produtos();