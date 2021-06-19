/// <reference types="cypress" />
describe('media page images display', () => {
    it('media page banner is visible', () => {
        cy.visit('http://localhost:3000/media.html')
        cy.get('#wrapper > section.banner > img').exists
    })

    it('media page Oculus Quest image is visible', () => {
        cy.get('#wrapper > section.sec_include > div > div > div.col-xs-12.col-sm-4.col-md-4.adj_text > img').exists
    })

    it('media page Switch Board image is visible', () => {
        cy.get('#wrapper > section.sec_include-middle > div > div > div.col-xs-12.col-sm-4.col-md-4.adj_text > img').exists
    })

    it('media page RoboPicker image is visible', () => {
        cy.get('#wrapper > section.sec_include1 > div > div > div.col-xs-12.col-sm-4.col-md-4.adj_text > img').exists
    })

    describe('media page text displays correctly', () => {
        it('media page main content displays Watch this video...', () => {
            cy.get('#wrapper > section.banner > div > div > h1').contains('WATCH THIS VIDEO')
        })

        it('media page main content displays Ww do things...', () => {
            cy.get('#wrapper > section.banner > div > div > span').contains('WE DO THINGS IN IT')
        })
    })

    describe('media page displays image headers h3', () => {
        it('media page main content displays image header h3 Sic Transit #1...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').contains('Sic Transit Gloria Mundi')
        })

        it('media page main content displays image header h3 Sic Transit #2..', () => {
            cy.get('#wrapper > section.sec_include-middle > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').contains('Sic Transit Gloria Mundi')
        })

        it('media page main content displays image header h3 Sic Transit #3..', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').contains('Sic Transit Gloria Mundi')
        })

    })

    describe('media page displays paragraphs p', () => {
        it('media page main content displays image p Analytics Know Your... ', () => {
            cy.get('#wrapper > section.sec_include > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').exists
        })

        it('media page main content displays image p Marketing ...', () => {
            cy.get('#wrapper > section.sec_include-middle > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').exists
        })

        it('media page main content displays image p Show Case...', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').exists
        })

    })

})