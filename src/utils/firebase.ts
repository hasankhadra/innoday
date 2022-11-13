/*
    This file contains wrappers for the Firebase API.
    It is used to abstract away the Firebase API from the rest of the codebase.
    This allows us to easily swap out Firebase for another API in the future.
*/

import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

/*
 * This is a wrapper around the Firebase Auth API.
 * It is used to sign in a user.
 * @param firebase: firebase.app.App
 * @returns user: firebase.User | null,
 */
export const signInFireBase = async (
    auth: Auth,
    email: string,
    password: string,
) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )

        const { user } = userCredential

        return user
    } catch (error) {
        throw new Error(error as string)
    }
}

/*
 * This is a wrapper around the Firebase Auth API.
 * It is used to create a new user.
 * @param firebase: firebase.app.App
 * @returns user: firebase.User | null,
 */
export const createNewUserFireBase = async (
    auth: Auth,
    email: string,
    password: string,
) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        )

        const { user } = userCredential

        return user
    } catch (error) {
        throw new Error(error as string)
    }
}

/*
 * This is a wrapper around the Firebase Auth API.
 * It is used to sign out a user.
 * @param firebase: firebase.app.App
 * @returns Promise<void>
 */
export const signOutFireBase = async (auth: Auth) => {
    try {
        await signOut(auth)
    } catch (error) {
        throw new Error(error as string)
    }
}
