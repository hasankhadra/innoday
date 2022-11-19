// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
    const { day, uid } = req.query

    const response = await axios.get(NEXT_APIS.STATS, { params: { day, uid } })

    if (response.data === 'No activities in this day!') {
        res.status(200).end(response.data)
    } else {
        res.status(200).json(response.data)
    }
}
