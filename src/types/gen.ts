import { ACTIVITY_TYPES } from '../constants'

export type Activity = {
    name: string
    type: ACTIVITY_TYPES
    duration: number
    datetime: number
}

export type ActivityStats = {
    name: string
    type: ACTIVITY_TYPES
    numPeople: number
    numHours: number
}

export type DayStats = {
    totalHours: number
    totalPeople: number
    activities: ActivityStats[]
}

export type Stats = {
    [key: string]: DayStats
}

export type History = {
    activities: Activity[]
}
