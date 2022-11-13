import type { NextPage } from 'next'
import { useContext } from 'react'
import Header from '../src/components/Header'
import UserHistory from '../src/components/UserHistory'
import { FireBaseAppContext } from './_app'

const History: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!

    return (
        <div>
            <Header />
            <div>History Page</div>
            <UserHistory uid={uid} />
        </div>
    )
}

export default History
