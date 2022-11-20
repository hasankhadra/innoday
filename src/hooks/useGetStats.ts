import { useCallback, useEffect, useState } from 'react'
import { Stats } from '../types/gen'
import { ACTIVITY_TYPES, API_METHODS, DAYS } from '../constants'
import { fetchFromApi } from '../utils/api'

const useGetStats = (uid?: string) => {
    const [stats, setStats] = useState<Stats>()

    // Fetch stats from API
    const getStats = useCallback(async () => {
        const newStats: Stats = {}

        // eslint-disable-next-line no-restricted-syntax
        for (const currentDay of DAYS) {
            const fetchedStats: string | 'No activities in this day!' =
                // eslint-disable-next-line no-await-in-loop
                await fetchFromApi(API_METHODS.STATS, uid, currentDay)

            if (fetchedStats !== 'No activities in this day!') {
                newStats[currentDay] = JSON.parse(fetchedStats)
            } else {
                newStats[currentDay] = {
                    totalHours: 0,
                    totalPeople: 0,
                    activities: [
                        {
                            type: ACTIVITY_TYPES.SPORTS,
                            numHours: 0,
                            numPeople: 0,
                        },

                        {
                            type: ACTIVITY_TYPES.STUDY,
                            numHours: 0,
                            numPeople: 0,
                        },

                        {
                            type: ACTIVITY_TYPES.WORK,
                            numHours: 0,
                            numPeople: 0,
                        },

                        {
                            type: ACTIVITY_TYPES.FUN,
                            numHours: 0,
                            numPeople: 0,
                        },
                    ],
                }
            }
        }

        return newStats
    }, [uid])

    // Fetch stats on mount
    useEffect(() => {
        let isMounted = true
        getStats().then((newStats) => {
            if (isMounted) setStats(newStats)
        })
        return () => {
            isMounted = false
        }
    }, [getStats])

    return stats
}

export default useGetStats
