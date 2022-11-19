import { useCallback, useEffect, useState } from 'react'
import { Stats } from '../types/gen'
import { API_METHODS, DAYS } from '../constants'
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
