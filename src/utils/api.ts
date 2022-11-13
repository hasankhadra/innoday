import axios from 'axios'
import { APIS } from './config'
import { API_METHODS } from '../constants'

/* Fetch data from API depending on method
 * @param method: API_METHODS
 * @param uid: string | null
 * @returns Promise<any>
 */
const fetchFromApi = async (method: API_METHODS, uid?: string) => {
    if (!uid) {
        throw new Error('No userId is provided!')
    }

    try {
        const response = await axios.get(APIS[method], { params: { uid } })
        return response.data
    } catch (error) {
        return null
    }
}

/*
 * Fetch data from API depending on method
 * @param method: API_METHODS
 * @param uid: string | null
 * @param data: any
 * @returns Promise<any>
 */
const postToApi = async (method: API_METHODS, data: any, uid?: string) => {
    if (!uid) {
        throw new Error('No userId is provided!')
    }

    try {
        const response = await axios.post(APIS[method], { ...data, uid })
        return response.data
    } catch (error) {
        return null
    }
}

export { postToApi, fetchFromApi }
