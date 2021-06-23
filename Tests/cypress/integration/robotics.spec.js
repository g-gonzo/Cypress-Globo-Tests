/// <reference types="cypress" />
describe('robotics page images display', () => {
    it('robotics page banner is visible', () => {
        cy.visit('http://localhost:3000/robotics.html')
        cy.get('#wrapper > section.banner > img').exists
    })

    it('robotics page MEDICINE image is visible', () => {
        cy.get('.row > :nth-child(1) > img').exists
    })

    it('robotics page AGRICULTURE image is visible', () => {
        cy.get('.row > :nth-child(2) > img').exists
    })

    it('robotics page MANUFACTURING image is visible', () => {
        cy.get('.row > :nth-child(3) > img').exists
    })

    it('robotics page ASSISTANTS image is visible', () => {
        cy.get('.row > :nth-child(4) > img').exists
    })

    describe('robotics page displays image headers h1', () => {
        it('robotics page main content displays h1 elements ROBOTICS...', () => {
            cy.get('#wrapper > section.banner > div > div > h1').contains('ROBOTICS')
        })

        it('robotics page main content displays h1 elements ALSO A STORY OF LIFE ...', () => {
            cy.get('#wrapper > section.banner > div > div > span').contains('ALSO A STORY OF LIFE')
        })

    })


    describe('robotics page displays image headers h2', () => {
        it('robotics page main content displays image header h2 MEDICINE...', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div:nth-child(1) > h2').contains('medicine')
        })

        it('robotics page main content displays image header h2 AGRICULTURE..', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div:nth-child(2) > h2').contains('AGRICULTURE')
        })

        it('robotics page main content displays image header h2 MANUFACTURING..', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div:nth-child(3) > h2').contains('MANUFACTURING')
        })

        it('robotics page main content displays image header h2 ASSISTANTS..', () => {
            cy.get('#wrapper > section.sec_include1 > div > div > div:nth-child(4) > h2').contains('ASSISTANTS')
        })

    })

    describe('robotics page displays image headers h3', () => {
        it('robotics page main content displays h3 elements Building on existing...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div > h3:nth-child(1)').exists
        })

        it('robotics page main content displays h3 elements We look forward...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div > h3:nth-child(3)').exists
        })

    })


    describe('robotics page displays paragraphs p', () => {
        it('media page main content displays p Life evolves, robotics... ', () => {
            cy.get('#wrapper > section.banner > div > div > p').exists
        })

        it('robotics page main content displays p  This elegant combo...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div > p:nth-child(2)').exists
        })

        it('robotics page main content displays p But the applications...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div > p:nth-child(4)').exists
        })

        it('robotics page main content displays p No matter the app...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div > p:nth-child(5)').exists
        })

        it('robotics page main content displays p We look forward...', () => {
            cy.get('#wrapper > section.sec_include > div > div > div > p:nth-child(6)').exists
        })

    })
})