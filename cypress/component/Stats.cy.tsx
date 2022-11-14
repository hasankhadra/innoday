/* eslint-disable no-undef */
import Stats from '../../src/components/Stats'

describe('Content', () => {
    it('Check for the h1 tag', () => {
        cy.mount(<Stats />)
        cy.get('div').should('contains.text', 'Stats for today')
    })

    it('Check for the navigation links', async () => {
        cy.mount(<Stats />)

        cy.get('a').should('contains.text', 'Home')
        cy.get('a').should('contains.text', 'Day')
        cy.get('a').should('contains.text', 'History')
        cy.get('a').should('contains.text', 'About Us')
        cy.get('a').should('contains.text', 'Login')
        cy.get('a').should('contains.text', 'Sign Up')
    })
})
