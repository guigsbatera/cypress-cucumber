/// <reference types="cypress" />

describe('API', () => {

    beforeEach(() => {
        cy.request('GET', "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").as('usuario')
    })

    it('Deve validar o status code', () => {
        cy.get('@usuario')
        .its('status')
        .should('equal', 200)
    });

    it('Deve validar o nome na estrutura list', () => {
        cy.get('@usuario')
        .its('body').then((response) => {
            expect(response.data.list).has.property('name', 'Professional')
        })
    });
});