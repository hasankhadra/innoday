import Link from 'next/link'
import { useContext } from 'react'
import { FireBaseAppContext } from '../../../pages/_app'
import SignOutButton from './SignOutButton'

const EntryHeader = () => {
    const { uid } = useContext(FireBaseAppContext)!

    return (
        <div>
            {uid ? (
                <></>
            ) : (
                <div>
                    <Link href="/entry/login"> Login </Link>
                    <Link href="/entry/register"> Sign Up </Link>
                </div>
            )}
            {uid && <SignOutButton />}
        </div>
    )
}

export default EntryHeader
