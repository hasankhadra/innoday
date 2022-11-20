import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { FireBaseAppContext } from '../_app'
import { createNewUserFireBase } from '../../utils/firebase'
import { isEmailValid, isPasswordValid } from '../../utils/validation'
import EntryForm from '../../components/entry/EntryForm/EntryForm'
import EntryHeader from '../../components/entry/EntryHeader/EntryHeader'
import logo from '../../assets/logo.svg'
import styles from './register.module.css'

const Register: NextPage = () => {
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

    const registerWithEmailAndPasswordHandler = async (
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
            await createNewUserFireBase(auth, email, password)
            setSubmitted(true)
        } catch (_error) {
            setError('Error registering with password and email!')
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
                    formType="Sign up"
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    onSubmit={registerWithEmailAndPasswordHandler}
                />
            </div>
        </div>
    )
}

export default Register
