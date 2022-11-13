import type { NextPage } from 'next'
import { useContext } from 'react'
import Header from '../src/components/Header'
import Stats from '../src/components/Stats'
import { FireBaseAppContext } from './_app'

const Home: NextPage = () => {
  
  const { uid } = useContext(FireBaseAppContext)!
  
  return (
    <div>
        <Header />
       
        <div>Home Page</div>

        <Stats uid={uid}/>
    </div>
)}

export default Home
