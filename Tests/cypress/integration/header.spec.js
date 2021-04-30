/// <reference types="cypress" />
describe('Header displays on all web pages', () => {
    it('header should display home page', () => {
        cy.visit('http://localhost:3000')
        cy.get('.col-md-8 > h1').should('contain', 'THE FUTURE')
        cy.get(':nth-child(1) > h3').should('contain', 'DARK ENERGY')
        cy.get('#sessions > :nth-child(3)')
        expect('#sessions > :nth-child(3)').to.exist
    })
        //You Left off here
    it('header should display on Our story page', () => {
        cy.get('#hamburger').click
        cy.get('.nav > .navbar-nav > :nth-child(1) > .nav-link').click
        cy.get('.banner > img').should.exist

    })
            // This TEST Should FAIL! no new page available..
    it('header should display on Brands page', () => {
        cy.get('#hamburger').click
        cy.get('.nav > .navbar-nav > :nth-child(2) > .nav-link').click
    })

    it('header should display on Robotics page', () => {
        cy.get('#hamburger').click
        cy.get('.nav > .navbar-nav > :nth-child(3) > .nav-link').click
        expect('h2').to.exist
    })

    it('header should display on Media page', () => {
        cy.get('#hamburger').click
        cy.get('.nav > .navbar-nav > :nth-child(4) > .nav-link').click
        expect('h2').to.exist
    })
            // This TEST Should FAIL! no new page available...
    it('header should display on Support page', () => {
        cy.get('#hamburger').click
        cy.get('.nav > .navbar-nav > :nth-child(5) > .nav-link').click
        expect('h1').to.exist
    })

})

describe('Header images test', () => {
    it('header should have Globo image', () => {
        cy.get('.logo > a > img').should.exist
    })

    it('header should have Sign in image', () => {
        

    })

})

describe('Header Nav links', () => {
    it('header should have five nav links', () => {


    })

})

describe('Header hamburger stack', () => {
    it('header should display hamburger stack', () => {


    })

})

describe('Header search box', () => {
    it('header should display search box', () => {


    })

})

describe('Header close button', () => {
    it('header should display close button', () => {


    })

})