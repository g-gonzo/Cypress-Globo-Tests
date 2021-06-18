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

    describe('Header displays correct text', () => {
        it('header should display tag line ', () => {
            cy.get('span.text').contains('MANIACALY TAKING TECH TO THE GLOBE')
        })

        it('header should display Our Story', () => {
            cy.get('.nav > .navbar-nav > :nth-child(1) > .nav-link').contains('Our story')
        })

        it('header should display Brands', () => {
            cy.get('.nav > .navbar-nav > :nth-child(2) > .nav-link').contains('Brands')
        })

        it('header should display Robotics', () => {
            cy.get('.nav > .navbar-nav > :nth-child(3) > .nav-link').contains('Robotics')
        })

        it('header should display Media', () => {
            cy.get('.nav > .navbar-nav > :nth-child(4) > .nav-link').contains('Media')
        })

        it('header should display Support', () => {
            cy.get('.nav > .navbar-nav > :nth-child(5) > .nav-link').contains('Support')
        })

    })

    describe('Header links are present', () => {
        it('header Globomantics logo link present ', () => {
            cy
                .get('a')
                .invoke('attr', 'href')
                .should('eq', 'index.html')
        })

        it('header Our Story link present ', () => {
            cy
                .get('#navbarSupportedContent > ul > li.nav-item.active > a')
                .invoke('attr', 'href')
                .should('eq', 'our-story.html')
        })

        it('header Brands link present ', () => {
            cy
                .get('#navbarSupportedContent > ul > li:nth-child(2) > a')
                .invoke('attr', 'href')
                .should('eq', 'brands.html')
        })

        it('header Robotics link present ', () => {
            cy
                .get('#navbarSupportedContent > ul > li:nth-child(3) > a')
                .invoke('attr', 'href')
                .should('eq', 'robotics.html')
        })

        it('header Our Media present ', () => {
            cy
                .get('#navbarSupportedContent > ul > li:nth-child(4) > a')
                .invoke('attr', 'href')
                .should('eq', 'media.html')
        })

        it('header Support link present ', () => {
            cy
                .get('#navbarSupportedContent > ul > li:nth-child(5) > a')
                .invoke('attr', 'href')
                .should('eq', 'support.html')
        })

    })

    describe('Header displays images', () => {
        it('header should display Globomantics Logo ', () => {
            cy.get('.logo > a > img').exists
        })

        it('header should display Sign-In ', () => {
            cy.get('img.sign-in-img').exists
        })

    })

    describe('Header Search Box is visible', () => {
        it('header should display Search Box', () => {
            cy.get('#wrapper > header > div > div.right_section.col-md-5.col-xs-12 > div').exists
        })

    })
})