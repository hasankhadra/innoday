import { useCallback, useEffect, useState } from 'react'
import { History, METHODS } from '../types/gen'
import fetchFromApi from '../utils/api'

const useGetHistory = (uid?: string) => {
    const [history, setHistory] = useState<History>()

    const getHistory = useCallback(async () => {
        const fetchedHistory = await fetchFromApi(METHODS.HISTORY, uid)
        setHistory(fetchedHistory)
    }, [uid])

    useEffect(() => {
        setHistory({
            activities: [
                {
                    name: 'Running',
                    duration: 60,
                    type: 'Sports',
                    datetime: 1115,
                },
                {
                    name: 'Playing Guitar',
                    duration: 30,
                    type: 'Fun',
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
