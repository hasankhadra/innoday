import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Header from '../components/Header/Header'
import UserHistory from '../components/UserHistory/UserHistory'
import { FireBaseAppContext } from './_app'

const History: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!
    const router = useRouter()

    useEffect(() => {
        if (!uid) router.push('/entry/login')
    }, [router, uid])

    return (
        <div>
            <Header uid={uid} />

            <UserHistory uid={uid} />
        </div>
    )
}

export default History
