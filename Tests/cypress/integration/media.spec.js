/// <reference types="cypress" />
describe('media page images display', () => {
    it('media page banner is visible', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('#wrapper > section.banner > img').exists
    })
})