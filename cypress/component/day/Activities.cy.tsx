/* eslint-disable no-undef */
import Activities from '../../../src/components/day/Activities'
import { ACTIVITY_TYPES } from '../../../src/constants'

describe('Content', () => {
    it('Check if all activities are shown on the component render', () => {
        const finalFormData = [
            {
                name: 'Frontend Project',
                duration: 50000,
                type: ACTIVITY_TYPES.STUDY,
                datetime: 120,
            },
            {
                name: 'Playing Piano',
                duration: 10000,
                type: ACTIVITY_TYPES.FUN,
                datetime: 11000,
            },
        ]

        cy.mount(
            <Activities
                finalFormData={finalFormData}
                deleteActivity={() => {}}
                handleSubmit={() => {}}
            />,
        )

        cy.get('li').should('contain.text', 'Frontend Project')
        cy.get('li').should('contain.text', 'Playing Piano')

        cy.get('li').should('contain.text', ACTIVITY_TYPES.STUDY)
        cy.get('li').should('contain.text', ACTIVITY_TYPES.FUN)

        cy.get('li').should('contain.text', 10000)
        cy.get('li').should('contain.text', 50000)
    })

    it('Check if the delete button works', () => {
        let finalFormData = [
            {
                name: 'Frontend Project',
                duration: 50000,
                type: ACTIVITY_TYPES.STUDY,
                datetime: 120,
            },
            {
                name: 'Playing Piano',
                duration: 10000,
                type: ACTIVITY_TYPES.FUN,
                datetime: 11000,
            },
        ]

        const deleteActivity = (index: number) => {
            const newFormData = finalFormData.filter((_, i) => i !== index)
            finalFormData = newFormData
        }

        cy.mount(
            <Activities
                finalFormData={finalFormData}
                deleteActivity={deleteActivity}
                handleSubmit={() => {}}
            />,
        )

        cy.get('button[name="deleteActivity-0"]').should('have.length', 1)
        cy.get('button[name="deleteActivity-0"]').should(
            'contain.text',
            'delete',
        )

        cy.get('button[name="deleteActivity-0"]').click()

        cy.get('li').should('contain.text', 'Playing Piano')
        cy.get('li').should('contain.text', ACTIVITY_TYPES.FUN)
        cy.get('li').should('contain.text', 50000)
    })
})
