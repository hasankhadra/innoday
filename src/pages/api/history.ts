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
    const { uid } = req.query

    const response = await axios.get(NEXT_APIS.HISTORY, { params: { uid } })

    res.status(200).json(response.data)
}
