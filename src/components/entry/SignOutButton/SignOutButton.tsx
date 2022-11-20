import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import styles from './SignOutButton.module.css'

const SignOutButton = () => {
    const router = useRouter()
    const auth = getAuth()

    return (
        <div>
            <button
                className={styles.button}
                name="signOut"
                onClick={async () => {
                    await auth.signOut()
                    router.push('/entry/login')
                }}
            >
                Log out
            </button>
        </div>
    )
}

export default SignOutButton
