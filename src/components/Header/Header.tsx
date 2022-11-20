import Link from 'next/link'
import Image from 'next/image'
import EntryHeader from '../entry/EntryHeader/EntryHeader'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = (props: { uid?: string }) => (
    <div className={styles.HeaderBG}>
        <div className="container">
            <header className={styles.HeaderWrapper}>
                <div className={styles.LinksWrapper}>
                    <Image src={logo} alt="logo" />
                    <Link href="/"> Home </Link>
                    <Link href="/day"> Add Activities </Link>
                    <Link href="/history"> History </Link>
                    <Link href="/about"> About Us </Link>
                </div>
                {props.uid && <EntryHeader uid={props.uid} />}
            </header>
        </div>
    </div>
)
export default Header
