import type { NextPage } from 'next'
import { useContext } from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Header from '../components/Header/Header'
import { FireBaseAppContext } from './_app'

const About: NextPage = () => {
    const { uid } = useContext(FireBaseAppContext)!

    return (
        <div>
            <Header uid={uid} />
            <AboutUs />
        </div>
    )
}

export default About
