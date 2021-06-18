/// <reference types="cypress" />
describe('home page images display', () => {
    it('home page banner is visible', () => {
        cy.visit('http://localhost:3000/index.html')
        cy.get('#wrapper > section.banner > img').exists
    })

    it('home page Dark Energy image is visible', () => {
        cy.get('#sessions > div:nth-child(1) > img').exists
    })

    it('home page Robotics image is visible', () => {
        cy.get('#sessions > div:nth-child(2) > img').exists
    })

    it('home page Strangers Rise image is visible', () => {
        cy.get('#sessions > div:nth-child(3) > img').exists
    })

    describe('home page text displays', () => {
        it('home page main content displays THE FUTURE', () => {
            cy.get('.col-md-8 > h1').contains('THE FUTURE')
        })

        it('home page main content displays WAS 5 MINUTES AGO', () => {
            cy.get('h1 > span').contains('WAS FIVE MINUTES AGO')
        })

        it('home page main content displays We were there.. epic', () => {
            cy.get('p').contains('We were there and it is going to be epic')
        })

        it('home page main content displays Future', () => {
            cy.get('.content-right > h3').contains('FUTURE')
        })

        it('home page main content displays Conference', () => {
            cy.get('.content-right > span').contains('CONFERENCE')
        })

        it('home page main content displays Ticket info..', () => {
            cy.get('.content-right > p').contains('Tickets are selling fast get yours today and be there in the future')
        })
    })

    describe('home page image headers display', () => {
        it('home page Dark Energy h3 is visible', () => {
            cy.get(':nth-child(1) > h3').contains('DARK ENERGY')
        })

        it('home page Robotics h3 is visible', () => {
            cy.get(':nth-child(2) > h3').contains('ROBOTICS')
        })

        it('home page Strangers Rise h3 is visible', () => {
            cy.get(':nth-child(3) > h3').contains('STRANGERS RISE')
        })
    })

    //You left off here!

    describe('home page image headers taglines display', () => {
        it('home page Dark Energy tagline is visible', () => {
            cy.get('#sessions > :nth-child(1) > p').contains('lkjl')
        })

        it('home page Robotics tagline is visible', () => {
            cy.get('#sessions > :nth-child(2) > p').contains('lkjl')
        })

        it('home page Strangers Rise tagline is visible', () => {
            cy.get('#sessions > :nth-child(3) > p').contains('lkjl')
        })
    })

})