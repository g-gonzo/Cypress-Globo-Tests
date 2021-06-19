/// <reference types="cypress" />
describe('robotics page images display', () => {
    it('robotics page banner is visible', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('#wrapper > section.banner > img').exists
    })
})