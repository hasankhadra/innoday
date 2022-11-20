/* eslint-disable no-undef */
import Header from '../../src/components/Header/Header'

describe('Content', () => {
    it('Check for the h1 tag', () => {
        cy.mount(<Header />)
        cy.get('a').should('not.contain.text', 'Innoday')
    })

    it('Check for the navigation links', () => {
        cy.mount(<Header />)
        cy.get('a').should('contains.text', 'Home')
        cy.get('a').should('contains.text', 'Add Activities')
        cy.get('a').should('contains.text', 'History')
        cy.get('a').should('contains.text', 'About Us')
    })
})
