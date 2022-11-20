import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { FireBaseAppContext } from '../_app'
import { signInFireBase } from '../../utils/firebase'
import { isEmailValid, isPasswordValid } from '../../utils/validation'
import EntryForm from '../../components/entry/EntryForm/EntryForm'
import EntryHeader from '../../components/entry/EntryHeader/EntryHeader'
import styles from './login.module.css'
import logo from '../../assets/logo.svg'

const Login: NextPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const { auth, uid } = useContext(FireBaseAppContext)!
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (uid) router.push('/')
    }, [router, uid])

    useEffect(() => {
        if (submitted) {
            router.push('/')
            setSubmitted(false)
        }
    }, [router, submitted])

    const signInWithEmailAndPasswordHandler = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault()

        if (!isEmailValid(email)) {
            setError('Please enter a valid email')
            return
        }

        if (!isPasswordValid(password)) {
            setError('Please enter a valid password')
            return
        }

        try {
            await signInFireBase(auth, email, password)
            setSubmitted(true)
        } catch (_error) {
            setError('Error signing in with password and email!')
        }
    }

    return (
        <div className={styles.EntryBG}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" />
            </div>
            <div className={styles.loginWrapper}>
                <EntryHeader uid={uid} />

                <EntryForm
                    formType="Sign in"
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    onSubmit={signInWithEmailAndPasswordHandler}
                />
            </div>
        </div>
    )
}

export default Login

/*
{
    uid: "sdjkfgh2344ltjhsldf",
    

}
*/
