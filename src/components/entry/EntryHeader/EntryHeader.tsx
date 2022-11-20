import Link from 'next/link'
import SignOutButton from '../SignOutButton/SignOutButton'
import styles from './EntryHeader.module.css'

const EntryHeader = (props: { uid?: string }) => (
    <div>
        {props.uid ? (
            <SignOutButton />
        ) : (
            <div className={styles.EntryHeader}>
                <div className={styles.Link}>
                    <Link href="/entry/login"> Login </Link>
                </div>
                <div className={styles.line}></div>
                <div className={styles.Link}>
                    <Link href="/entry/register"> Sign Up </Link>{' '}
                </div>
            </div>
        )}
    </div>
)

export default EntryHeader
