/// <reference types="cypress" />
describe('Header displays on all web pages', () => {
    it('header should display on home page', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('header').exists

    })

    it('header should display on Our Story page', () => {
        cy.visit('http://localhost:3000/our-story.html')
        cy.get('header').exists

    })

    it('header should display on Brands page', () => {
        cy.visit('http://localhost:3000/brands.html')
        cy.get('header').exists

    })

    it('header should display on Robotics page', () => {
        cy.visit('http://localhost:3000/robotics.html')
        cy.get('header').exists

    })

    it('header should display on Media page', () => {
        cy.visit('http://localhost:3000/media.html')
        cy.get('header').exists

    })

    it('header should display on Support page', () => {
        cy.visit('http://localhost:3000/support.html')
        cy.get('header').exists

    })

})