import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import DayForm from '../components/day/DayForm'
import Header from '../components/Header'
import { FireBaseAppContext } from './_app'

const Day: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!
    const router = useRouter()

    useEffect(() => {
        if (!uid) router.push('/entry/login')
    }, [router, uid])

    return (
        <div>
            <Header />
            <div>About Us Page</div>
            <DayForm uid={uid} />
        </div>
    )
}

export default Day
