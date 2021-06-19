/// <reference types="cypress" />
describe('brands page images display', () => {
    it('brands page banner is visible', () => {
        cy.visit('http://localhost:3000/brands.html')
        cy.get('#wrapper > section.banner > img').exists
    })

    it('brands page Analytics image is visible', () => {
        cy.get('#wrapper > section.sec_include > div > div > div.col-xs-12.col-sm-4.col-md-4.adj_text > img').exists
    })

    it('brands page Marketing image is visible', () => {
        cy.get('#wrapper > section.sec_include-middle > div > div > div.col-xs-12.col-sm-4.col-md-4.adj_text > img').exists
    })

    it('brands page Show Case image is visible', () => {
        cy.get('#wrapper > section.sec_include1 > div > div > div.col-xs-12.col-sm-4.col-md-4.adj_text > img').exists
    })

    describe('brands page text displays correctly', () => {
        it('brands page main content displays Branding solutions...', () => {
            cy.get('#wrapper > section.banner > div > div > h1').contains('Branding Solutions 4 Your Company Needs')
        })

        it('brands page main content displays Analytics..', () => {
            cy.get('#wrapper > section.banner > div > div > span').contains('Analytics')
        })

        it('brands page main content displays Marketing..', () => {
            cy.get('#wrapper > section.banner > div > div > span').contains('Marketing')
        })

        it('brands page main content displays Show Case..', () => {
            cy.get('#wrapper > section.banner > div > div > span').contains('Show Case')
        })

    })

    describe('brands page displays image headers h3', () => {
        it('brands page main content displays image header h3 Analytics Know Your... ', () => {
            cy.get('#wrapper > section.sec_include > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').contains('Analytics - Know Your Customer')
        })

        it('brands page main content displays image header h3 Marketing ...', () => {
            cy.get('#wrapper > section.sec_include-middle > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').contains('Marketing - Sic Transit Gloria Mundi')
        })

        it('brands page main content displays image header h3 Show Case...', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').contains('Show Case - Sic Transit Gloria Mundi')
        })

    })

    describe('brands page displays paragraphs p', () => {
        it('brands page main content displays image p Analytics Know Your... ', () => {
            cy.get('#wrapper > section.sec_include > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').exists
        })

        it('brands page main content displays image p Marketing ...', () => {
            cy.get('#wrapper > section.sec_include-middle > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').exists
        })

        it('brands page main content displays image p Show Case...', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div.col-xs-12.col-sm-8.col-md-8.adj_text > h3').exists
        })

    })

})