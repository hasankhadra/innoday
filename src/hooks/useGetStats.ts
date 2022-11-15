import { useCallback, useEffect, useState } from 'react'
import { DayStats, Stats } from '../types/gen'
import { ACTIVITY_TYPES, API_METHODS, DAYS } from '../constants'
import { fetchFromApi } from '../utils/api'

const useGetStats = (uid?: string) => {
    const [stats, setStats] = useState<Stats>()

    // Fetch stats from API
    const getStats = useCallback(
        async (day: number) => {
            const currentDay = DAYS[day]
            const fetchedStats: DayStats = await fetchFromApi(
                API_METHODS.STATS,
                uid,
                currentDay,
            )
            setStats({ ...stats, [currentDay]: fetchedStats })
        },
        [stats, uid],
    )

    // Fetch stats on mount
    useEffect(() => {
        if (!stats) {
            const mockStatsArray = DAYS.map((day: string) => ({
                [day]: {
                    totalHours: 90,
                    totalPeople: 10,
                    activities: [
                        {
                            name: 'Running',
                            type: ACTIVITY_TYPES.SPORTS,
                            numPeople: 5,
                            numHours: 30,
                        },
                        {
                            name: 'Playing Guitar',
                            type: ACTIVITY_TYPES.FUN,
                            numPeople: 5,
                            numHours: 60,
                        },
                    ],
                },
            }))

            const mockStats = mockStatsArray.reduce(
                (o, key) => ({ ...o, ...key }),
                {},
            )

            setStats(mockStats)

            // @TODO: integrate with backend
            // getStats()
        }
    }, [getStats, stats])

    return stats
}

export default useGetStats
