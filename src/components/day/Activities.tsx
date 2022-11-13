import React from 'react'
import { Activity } from '../../types/gen'

const Activities = (props: {
    finalFormData: Activity[]
    // eslint-disable-next-line no-unused-vars
    deleteActivity: (index: number) => void
    // eslint-disable-next-line no-unused-vars
    handleSubmit: (submitted: boolean) => void
}) => (
    <div>
        <h2>Added Activities</h2>
        <ul>
            {props.finalFormData &&
                props.finalFormData.map((activity, index) => (
                    <li key={index}>
                        {activity.name} - {activity.duration} - {activity.type}
                        <button onClick={() => props.deleteActivity(index)}>
                            {' '}
                            delete{' '}
                        </button>
                    </li>
                ))}
        </ul>
        <form>
            <button onClick={() => props.handleSubmit(true)}>
                {' '}
                Submit Activities
            </button>
        </form>
    </div>
)

export default Activities
