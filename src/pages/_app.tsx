import '../globals.css'
import type { AppProps } from 'next/app'
import { initializeApp, FirebaseApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore/lite'
import React, { useMemo } from 'react'
import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseConfig } from '../utils/config'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const FireBaseAppContext = React.createContext<{
    firebaseApp: FirebaseApp
    db: Firestore
    auth: Auth
    uid?: string
} | null>(null)

function MyApp({ Component, pageProps }: AppProps) {
    const [uid, setUid] = React.useState<string>('')

    const auth = getAuth(app)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (!uid) setUid(user.uid ?? '')
        } else if (uid) setUid('')
    })

    const fireBaseAppValue = useMemo(
        () => ({
            firebaseApp: app,
            db,
            auth,
            uid,
        }),
        [auth, uid],
    )

    return (
        <FireBaseAppContext.Provider value={fireBaseAppValue}>
            <Component {...pageProps} />
        </FireBaseAppContext.Provider>
    )
}

export default MyApp
