/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react'
import { ACTIVITY_TYPES, API_METHODS, DAYS } from '../../constants'
import { Activity } from '../../types/gen'
import { postToApi } from '../../utils/api'
import Activities from './Activities'
import AddActivity from './AddActivity'

const DayForm = (props: { uid?: string }) => {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState<number>(1)
    const [type, setType] = useState<ACTIVITY_TYPES>(ACTIVITY_TYPES.STUDY)

    const [finalFormData, setFinalFormData] = useState<Activity[]>([])
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (submitted) {
            // execlude the datetime property from the finalFormData
            const filteredActivities = finalFormData.map((activity) => ({
                name: activity.name,
                duration: activity.duration,
                type: activity.type,
            }))

            // construct the request body
            const request = {
                uid: props.uid,
                activities: filteredActivities,
                datetime: Math.floor(Date.now() / 1000),
                day: DAYS[new Date().getDay()],
            }

            // post the request to the API
            postToApi(API_METHODS.ADD_ACTIVITIES, request, props.uid).then(
                () => {
                    setFinalFormData([])
                    setSubmitted(false)
                    alert('Form Submitted!')
                },
            )
        }
    }, [submitted, finalFormData, props.uid])

    const handleAddActivity = () => {
        if (!name || !duration) {
            alert('Please fill out all fields!')
            return
        }

        const activityTypes = finalFormData.map((activity) => activity.type)

        if (activityTypes.includes(type)) {
            alert("You can't add the same activity type twice.")
            return
        }

        const newActivity = {
            name,
            duration: duration * 3600,
            type,
            datetime: Math.floor(Date.now() / 1000),
        }

        // set the state of finalFormData to include the new activity
        setFinalFormData([...finalFormData, newActivity])

        // reset the state of name, duration, and type
        setName('')
        setDuration(1)
        setType(ACTIVITY_TYPES.STUDY)
    }

    const deleteActivity = (index: number) => {
        // create a copy of finalFormData
        const newFormData = [...finalFormData]

        // remove the activity at the given index
        const newActivities = newFormData.filter((_, i) => i !== index)

        setFinalFormData(newActivities)
    }

    return (
        <div>
            <h2>Day Form</h2>
            <AddActivity
                name={name}
                duration={duration}
                type={type}
                handleAddActivity={handleAddActivity}
                setName={setName}
                setDuration={setDuration}
                setType={setType}
            />
            <Activities
                finalFormData={finalFormData}
                deleteActivity={deleteActivity}
                handleSubmit={() => setSubmitted(true)}
            />
        </div>
    )
}

export default DayForm
