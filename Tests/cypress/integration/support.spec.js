/// <reference types="cypress" />
describe('support page images display', () => {
    it('support page banner is visible', () => {
        cy.visit('http://localhost:3000/support.html')
        cy.get('#wrapper > section.banner > img').exists
    })

    it('support page Dark Energy image is visible', () => {
        cy.get('#sessions > :nth-child(1) > img').exists
    })

    it('support page Robotics image is visible', () => {
        cy.get('#sessions > :nth-child(2) > img').exists
    })

    it('support page Strangers Rise image is visible', () => {
        cy.get('#sessions > :nth-child(3) > img').exists
    })

    describe('support page displays image headers h1', () => {
        it('support page main content displays h1 elements Globomantics...', () => {
            cy.get('#wrapper > section.banner > div > div > div.col-md-8.middle > h1').contains('GLOBOMANTICS')
        })

        it('support page main content displays h1 elements Team Support...', () => {
            cy.get('#wrapper > section.banner > div > div > div.col-md-8.middle > h1 > span').contains('TEAM SUPPORT')
        })

    })

    describe('support page displays paragraphs p', () => {
        it('support page main content displays p We are here... ', () => {
            cy.get('#wrapper > section.banner > div > div > div.col-md-8.middle > p:nth-child(2)').exists
        })

        it('support page main content displays p Answering quest...', () => {
            cy.get('#wrapper > section.banner > div > div > div.col-md-8.middle > p:nth-child(3)').exists
        })

    })

    describe('support page displays input boxes', () => {
        it('support page main displays input box Username ... ', () => {
            cy.get('.content-right > :nth-child(1) > .form-control').exists
        })

        it('support page main displays input box email ... ', () => {
            cy.get('#basic-url').exists
        })

        it('support page main displays input box add comments ... ', () => {
            cy.get('#wrapper > section.banner > div > div > div.content-right.col-md-4 > div:nth-child(5) > textarea').exists
        })

    })

    describe('support page displays button', () => {
        it('support page main displays button ', () => {
            cy.get('#wrapper > section.banner > div > div > div.content-right.col-md-4 > div.text-center > button').exists
        })

        it('support page main button displays Send', () => {
            cy.get('#wrapper > section.banner > div > div > div.content-right.col-md-4 > div.text-center > button').contains('Send')
        })

    })



})