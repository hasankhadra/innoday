/* eslint-disable no-undef */
import Header from '../../src/components/Header'

describe('Content', () => {
    it('Check for the h1 tag', () => {
        cy.mount(<Header />)
        cy.get('h1').should('contains.text', 'Innoday')
    })

    it('Check for the navigation links', () => {
        cy.mount(<Header />)
        cy.get('a').should('contains.text', 'Home')
        cy.get('a').should('contains.text', 'Day')
        cy.get('a').should('contains.text', 'History')
        cy.get('a').should('contains.text', 'About Us')
        cy.get('a').should('contains.text', 'Login')
        cy.get('a').should('contains.text', 'Sign Up')
    })
})
