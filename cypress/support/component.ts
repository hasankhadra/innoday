import './commands'

import { mount } from 'cypress/react'

declare global {
    // eslint-disable-next-line no-unused-vars
    namespace Cypress {
        // eslint-disable-next-line no-unused-vars
        interface Chainable {
            mount: typeof mount
        }
    }
}

// eslint-disable-next-line no-undef
Cypress.Commands.add('mount', mount)
