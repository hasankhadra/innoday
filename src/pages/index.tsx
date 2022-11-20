import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Header from '../components/Header/Header'
import Stats from '../components/Stats/Stats'
import { FireBaseAppContext } from './_app'

const Home: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!
    const router = useRouter()

    useEffect(() => {
        if (!uid) router.push('/entry/login')
    }, [router, uid])

    return (
        <div>
            <Header uid={uid} />

            <Stats uid={uid} />
        </div>
    )
}

export default Home
