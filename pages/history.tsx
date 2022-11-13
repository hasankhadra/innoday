import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Header from '../src/components/Header'
import UserHistory from '../src/components/UserHistory'
import { FireBaseAppContext } from './_app'

const History: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!
    const router = useRouter()

    useEffect(() => {
        if (!uid) router.push('/entry/login')
    }, [router, uid])

    return (
        <div>
            <Header />
            <div>History Page</div>
            <UserHistory uid={uid} />
        </div>
    )
}

export default History
