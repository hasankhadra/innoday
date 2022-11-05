import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore/lite";
import React, { useEffect, useMemo } from "react";
import { Auth, getAuth } from "firebase/auth";
import { firebaseConfig } from "../src/utils/config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const FireBaseAppContext = React.createContext<{
    firebaseApp: FirebaseApp;
    db: Firestore;
    auth: Auth;
} | null>(null);

export const AuthenticationContext = React.createContext<{
    uid: string;
    // eslint-disable-next-line no-unused-vars
    setUid: (uid: string) => void;
} | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
    const [uid, setUid] = React.useState<string>("");

    const auth = getAuth(app);

    const fireBaseAppValue = useMemo(
        () => ({
            firebaseApp: app,
            db,
            auth,
        }),
        [auth]
    );

    const authenticationValue = useMemo(
        () => ({
            uid,
            setUid,
        }),
        [uid, setUid]
    );

    useEffect(() => {
        setUid(auth?.currentUser?.uid || "");
    }, [auth?.currentUser]);

    return (
        <AuthenticationContext.Provider value={authenticationValue}>
            <FireBaseAppContext.Provider value={fireBaseAppValue}>
                <Component {...pageProps} />
            </FireBaseAppContext.Provider>
        </AuthenticationContext.Provider>
    );
}

export default MyApp;
