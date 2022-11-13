import { useCallback, useEffect, useState } from 'react'
import { Stats } from '../types/gen'
import { ACTIVITY_TYPES, API_METHODS } from '../constants'
import { fetchFromApi } from '../utils/api'

const useGetStats = (uid?: string) => {
    const [stats, setStats] = useState<Stats>()

    const getStats = useCallback(async () => {
        const fetchedStats = await fetchFromApi(API_METHODS.STATS, uid)
        setStats(fetchedStats)
    }, [uid])

    useEffect(() => {
        setStats({
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
        })

        // @TODO: integrate with backend
        // getStats()
    }, [getStats])

    return stats
}

export default useGetStats
