/* eslint-disable no-unused-vars */

import React from 'react'
import { Activity } from '../../types/gen'

const Activities = (props: {
    finalFormData: Activity[]
    deleteActivity: (index: number) => void
    handleSubmit: (submitted: boolean) => void
}) => (
    <div>
        <h2>Added Activities</h2>
        <ul>
            {props.finalFormData &&
                props.finalFormData.map((activity, index) => (
                    <li key={index}>
                        {activity.name} - {activity.duration} - {activity.type}
                        <button
                            name={`deleteActivity-${index}`}
                            onClick={() => props.deleteActivity(index)}
                        >
                            delete
                        </button>
                    </li>
                ))}
        </ul>
        <form>
            <button
                name="submitActivities"
                onClick={() => props.handleSubmit(true)}
            >
                Submit Activities
            </button>
        </form>
    </div>
)

export default Activities
