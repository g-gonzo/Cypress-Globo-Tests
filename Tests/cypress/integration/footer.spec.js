/// <reference types="cypress" />
describe('Footer displays on all web pages', () => {
    it('footer should display on home page', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('footer').exists

    })

    it('footer should display on Our Story page', () => {
        cy.visit('http://localhost:3000/our-story.html')
        cy.get('footer').exists

    })

    it('footer should display on Brands page', () => {
        cy.visit('http://localhost:3000/brands.html')
        cy.get('footer').exists

    })

    it('footer should display on Robotics page', () => {
        cy.visit('http://localhost:3000/robotics.html')
        cy.get('footer').exists

    })

    it('footer should display on Media page', () => {
        cy.visit('http://localhost:3000/media.html')
        cy.get('footer').exists

    })

    it('footer should display on Support page', () => {
        cy.visit('http://localhost:3000/support.html')
        cy.get('footer').exists

    })

    describe('Footer displays correct text', () => {
        it('footer should display Our Story', () => {
            cy.visit('http://localhost:3000/index.html')
            cy.get('li')
            cy.contains('li', 'Our Story')
        })

        it('footer should display Brands', () => {
            cy.get('li')
            cy.contains('li', 'Brands')

        })

        it('footer should display Robotics', () => {
            cy.get('li')
            cy.contains('li', 'Robotics')

        })

        it('footer should display Media', () => {
            cy.get('li')
            cy.contains('li', 'Media')

        })

        it('footer should display Support', () => {
            cy.get('li')
            cy.contains('li', 'Support')

        })

        it('footer should display Careers', () => {
            cy.get('li')
            cy.contains('li', 'Careers')

        })

        it('footer should display Privacy Policy', () => {
            cy.get('li')
            cy.contains('li', 'Privacy Policy')

        })

        it('footer should display Media Inquiries', () => {
            cy.get('li')
            cy.contains('li', 'Media Inquiries')

        })

        it('footer should display Help', () => {
            cy.get('li')
            cy.contains('li', 'Help')

        })

    })

    describe('Footer displays images', () => {
        it('footer should display Globomantics image', () => {
            cy.get('.mobileImg').should('to.be.visible')

        })

        it('footer should display PluralSight image', () => {
            cy.get('.video-sec').should('to.be.visible')

        })

    })

})