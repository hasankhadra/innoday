import { useCallback, useEffect, useState } from 'react'
import { History } from '../types/gen'
import { API_METHODS } from '../constants'
import { fetchFromApi } from '../utils/api'

const useGetHistory = (uid?: string) => {
    const [history, setHistory] = useState<History>()

    // Fetch history from API
    const getHistory = useCallback(async () => {
        if (uid) {
            const fetchedHistory = await fetchFromApi(API_METHODS.HISTORY, uid)
            return fetchedHistory
        }
        return ''
    }, [uid])

    // Fetch history on mount
    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            getHistory().then((newHistory) => {
                if (newHistory && isMounted) setHistory(newHistory)
            })
        }
        return () => {
            isMounted = false
        }
    }, [getHistory, uid])

    return history
}

export default useGetHistory
