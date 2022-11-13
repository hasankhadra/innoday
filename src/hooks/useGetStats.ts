import { useCallback, useEffect, useState } from 'react'
import { Stats, METHODS } from '../types/gen'
import fetchFromApi from '../utils/api'

const useGetStats = (uid?: string) => {
    const [stats, setStats] = useState<Stats>()

    const getStats = useCallback(async () => {
        const fetchedStats = await fetchFromApi(METHODS.STATS, uid)
        setStats(fetchedStats)
    }, [uid])

    useEffect(() => {
        setStats({
            totalHours: 90,
            totalPeople: 10,
            activities: [
                {
                    name: 'Running',
                    type: 'Sports',
                    numPeople: 5,
                    numHours: 30,
                },
                {
                    name: 'Playing Guitar',
                    type: 'Fun',
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
