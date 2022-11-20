/* eslint-disable no-undef */

describe('Entry', () => {
    describe('Navigation', () => {
        it('should navigate to the register page', () => {
            cy.visit('http://localhost:3000/entry/login')

            cy.get('a[href*="/entry/register"]').click()

            cy.url().should('include', '/register')

            cy.get('button').contains('Sign up')
        })
    })

    describe('Register', () => {
        it('should register', async () => {
            cy.visit('http://localhost:3000/entry/register')

            cy.get('input[name="userEmail"]').type('cypresss@test.com')
            cy.get('input[name="userPassword"]').type('asdfqwerT$3d')
            cy.get('button').click()

            cy.wait(1000)

            cy.url().should('eq', 'http://localhost:3000/')
        })
    })
})

export {}
