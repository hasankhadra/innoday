/* eslint-disable no-unused-vars */

import React from 'react'
import { Activity } from '../../../types/gen'
import styles from './Activities.module.css'

const Activities = (props: {
    finalFormData: Activity[]
    deleteActivity: (index: number) => void
    handleSubmit: () => void
}) => (
    <div className={styles.ActivitiesWrapper}>
        <h3 className={styles.h3}>Added Activities</h3>
        <ul className={styles.ul}>
            {props.finalFormData &&
                props.finalFormData.map((activity, index) => (
                    <li className={styles.li} key={index}>
                        <div className={styles.ActivityProps}>
                            <span className={styles.ActivityName}>
                                {activity.name}
                            </span>
                            <span>
                                {activity.duration} hrs - {activity.type}
                            </span>
                        </div>
                        <button
                            className={styles.DeleteButton}
                            name={`deleteActivity-${index}`}
                            onClick={() => props.deleteActivity(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
        </ul>
        <form>
            <button
                className={styles.SubmitButton}
                name="submitActivities"
                type="button"
                onClick={() => props.handleSubmit()}
            >
                Submit Activities
            </button>
        </form>
    </div>
)

export default Activities
