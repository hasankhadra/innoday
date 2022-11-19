import Link from 'next/link'
import SignOutButton from './SignOutButton'

const EntryHeader = (props: { uid?: string }) => (
    <div>
        {props.uid ? (
            <SignOutButton />
        ) : (
            <div>
                <Link href="/entry/login"> Login </Link>
                <Link href="/entry/register"> Sign Up </Link>
            </div>
        )}
    </div>
)

export default EntryHeader
