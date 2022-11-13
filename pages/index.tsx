import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Header from '../src/components/Header'
import Stats from '../src/components/Stats'
import { FireBaseAppContext } from './_app'

const Home: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!
    const router = useRouter()

    useEffect(() => {
        if (!uid) router.push('/entry/login')
    }, [router, uid])

    return (
        <div>
            <Header />

            <div>Home Page</div>

            <Stats uid={uid} />
        </div>
    )
}

export default Home
