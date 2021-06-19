/// <reference types="cypress" />
describe('support page images display', () => {
    it('support page banner is visible', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('#wrapper > section.banner > img').exists
    })
})