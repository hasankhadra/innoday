import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { NEXT_APIS } from '../../utils/config'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const response = await axios.post(NEXT_APIS.ADD_ACTIVITIES, req.body)

    res.status(200).json(response.data)
}
