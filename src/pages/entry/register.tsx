import type { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FireBaseAppContext } from '../_app'
import { createNewUserFireBase } from '../../utils/firebase'
import { isEmailValid, isPasswordValid } from '../../utils/validation'
import EntryForm from '../../components/entry/EntryForm'
import EntryHeader from '../../components/entry/EntryHeader'

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
        <div>
            <EntryHeader />
            <h1 className="text-3xl mb-2 text-center font-bold">Register</h1>

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
    )
}

export default Register
