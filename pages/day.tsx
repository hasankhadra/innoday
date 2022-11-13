import type { NextPage } from 'next'
import { useContext } from 'react'
import DayForm from '../src/components/DayForm'
import Header from '../src/components/Header'
import { FireBaseAppContext } from './_app'

const Day: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!

    return (
        <div>
            <Header />
            <div>About Us Page</div>
            <DayForm uid={uid} />
        </div>
    )
}

export default Day
