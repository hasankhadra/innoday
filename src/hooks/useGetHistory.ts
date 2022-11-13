import { useCallback, useEffect, useState } from 'react'
import { History } from '../types/gen'
import { ACTIVITY_TYPES, API_METHODS } from '../constants'
import { fetchFromApi } from '../utils/api'

const useGetHistory = (uid?: string) => {
    const [history, setHistory] = useState<History>()

    const getHistory = useCallback(async () => {
        const fetchedHistory = await fetchFromApi(API_METHODS.HISTORY, uid)
        setHistory(fetchedHistory)
    }, [uid])

    useEffect(() => {
        setHistory({
            activities: [
                {
                    name: 'Running',
                    duration: 60,
                    type: ACTIVITY_TYPES.SPORTS,
                    datetime: 1115,
                },
                {
                    name: 'Playing Guitar',
                    duration: 30,
                    type: ACTIVITY_TYPES.FUN,
                    datetime: 2222,
                },
            ],
        })

        // @TODO: integrate with backend
        // getHistory()
    }, [getHistory])

    return history
}

export default useGetHistory
