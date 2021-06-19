/// <reference types="cypress" />
describe('brands page images display', () => {
    it('brands page banner is visible', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('#wrapper > section.banner > img').exists
    })
})