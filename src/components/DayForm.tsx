/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import { ACTIVITY_TYPES, API_METHODS } from '../constants'
import { Activity } from '../types/gen'
import { postToApi } from '../utils/api'

const DayForm = (props: { uid?: string }) => {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState<number>()
    const [type, setType] = useState<ACTIVITY_TYPES>(ACTIVITY_TYPES.STUDY)
    const [submitted, setSubmitted] = useState<boolean>(false)

    const [finalFormData, setFinalFormData] = useState<Activity[]>([])

    useEffect(() => {
        if (submitted) {
            alert('Thanks for submitting your data!')
            setFinalFormData([])
            setSubmitted(false)
        }
    }, [submitted])

    const handleSubmit = async () => {
        const filteredActivities = finalFormData.map((activity) => ({
            name: activity.name,
            duration: activity.duration,
            type: activity.type,
        }))
        const request = {
            uid: props.uid,
            activities: filteredActivities,
            datetime: new Date().getSeconds(),
        }

        await postToApi(API_METHODS.ADD_ACTIVITIES, request, props.uid)
        setSubmitted(true)
    }

    const handleAddActivity = () => {
        if (!name || !duration) {
            alert('Please fill out all fields.')
            return
        }

        const types = finalFormData.map((activity) => activity.type)

        if (types.includes(type)) {
            alert("You can't add the same activity type twice.")
            return
        }

        const newActivity = {
            name,
            duration,
            type,
            datetime: new Date().getSeconds(),
        }

        setFinalFormData([...finalFormData, newActivity])
        setName('')
        setDuration(undefined)
        setType(ACTIVITY_TYPES.STUDY)
    }

    const deleteActivity = (index: number) => {
        const newActivities = finalFormData.filter((activity, i) => i !== index)
        setFinalFormData(newActivities)
    }

    return (
        <div>
            <h2>Day Form</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="e.g. Reading"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration (hours)</label>
                    <input
                        type="range"
                        id="duration"
                        value={duration}
                        min="0.1"
                        max="16"
                        step="0.1"
                        placeholder="e.g. 2.5"
                        onChange={(e) => setDuration(Number(e.target.value))}
                    />
                    <p>{duration} h</p>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <select
                        id="type"
                        onChange={(e) =>
                            setType(e.target.value as ACTIVITY_TYPES)
                        }
                        value={type}
                    >
                        <option value={ACTIVITY_TYPES.STUDY}>Study</option>
                        <option value={ACTIVITY_TYPES.WORK}>Work</option>
                        <option value={ACTIVITY_TYPES.SPORTS}>Sports</option>
                        <option value={ACTIVITY_TYPES.FUN}>Fun</option>
                    </select>
                </div>
                <button type="button" onClick={handleAddActivity}>
                    Add Activity
                </button>
            </form>

            <div>
                <h2>Added Activities</h2>
                <ul>
                    {finalFormData &&
                        finalFormData.map((activity, index) => (
                            <li key={index}>
                                {activity.name} - {activity.duration} -{' '}
                                {activity.type}
                                <button onClick={() => deleteActivity(index)}>
                                    {' '}
                                    delete{' '}
                                </button>
                            </li>
                        ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <button> Submit Activities</button>
                </form>
            </div>
        </div>
    )
}

export default DayForm
