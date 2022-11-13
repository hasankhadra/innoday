import type { NextPage } from 'next'
import { useContext } from 'react'
import Header from '../src/components/Header'
import useGetHistory from '../src/hooks/useGetHistory'
import { FireBaseAppContext } from './_app'

const History: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!

    const history = useGetHistory(uid)

    return (
        <div>
            <Header />
            <div>History Page</div>
            {history?.activities.map((activity) => (
                <div key={activity.datetime}>
                    <div>{activity.name}</div>
                    <div>{activity.duration}</div>
                    <div>{activity.type}</div>
                    <div>{activity.datetime}</div>
                </div>
            ))}
        </div>
    )
}

export default History
