import axios from 'axios'
import { APIS } from './config'
import { METHODS } from '../types/gen'

const fetchFromApi = async (method: METHODS, uid?: string) => {
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

export default fetchFromApi
