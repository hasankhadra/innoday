/* eslint-disable no-unused-vars */

// different types of API methods
export enum API_METHODS {
    STATS = 'STATS',
    HISTORY = 'HISTORY',
    ADD_ACTIVITIES = 'ADD_ACTIVITIES',
}

// different types of activities
export enum ACTIVITY_TYPES {
    SPORTS = 'Sports',
    FUN = 'Fun',
    WORK = 'Work',
    STUDY = 'Study',
}

export const RE_PASSWORD_VALIDATOR =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
export const RE_EMAIL_VALIDATOR = /\S+@\S+\.\S+/
